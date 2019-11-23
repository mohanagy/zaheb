import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import {
  ScrollContainer, WorkshopCard,Group ,SplashButton,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

class Purchases extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Workshops',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      color: '#ffffff',
    },
    headerStyle: {
      backgroundColor: '#1E1E1E',
    },
    headerRight: (
      <FontAwesome5
        name="bell"
        size={18}
        onPress={() => navigation.navigate('Notifications')}
        solid
        style={{
          marginRight: 10,
          color: '#ffffff',

        }}
      />),
    headerLeft: (
      <FontAwesome5
        name="stream"
        size={18}
        onPress={() => navigation.toggleDrawer()}
        solid
        style={{
          marginLeft: 10,
          color: '#ffffff',

        }}
      />),
  });

  componentDidMount =async () => {
    const { storeData:{ selectedServiceId },actions:{ getWorkShopsByServiceId },navigation:{ navigate } } = this.props
    if (!selectedServiceId)navigate('SubServices')
    await getWorkShopsByServiceId(selectedServiceId)
  }

  handleBooking= async (id) => {
    const { actions:{ selectWorkShop },navigation:{ navigate } } = this.props
    await selectWorkShop(id)
    navigate('NearestServiceCenter')
  }

  handleSelectWorkShop= async (id) => {
    const { actions:{ selectWorkShop },navigation:{ navigate } } = this.props
    await selectWorkShop(id)
    navigate('ProfileWorkshop')
  }

  skipWorkShop=async () => {
    const { navigation:{ navigate } } = this.props

    navigate('NearestServiceCenter')
  }

  render() {
    const { storeData:{ workshops ,isFetching } } = this.props
    if (isFetching) { return (
      <Group
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </Group>
    ) }
    return (
      <Group
        style={{
          flex:1,
        }}
      >
        <Group
          style={{
            position: 'absolute',
            top:'90%',
            left:'1%',
            zIndex:999999,
            width:'90%',
          }}
        >

          <SplashButton
            title="SKIP"
            loading={isFetching}
            onPress={() => this.skipWorkShop()}
            style={{
              buttonStyle: {
                justifyContent: 'center',
                backgroundColor:'#1E1E1E',
                zIndex:999,
                width:'50%',
                heigh:250,
                alignSelf:'center',
                borderRadius: 40,
              },
              buttonContainerStyle:{
                heigh:200,
              },
            }}
          />
        </Group>

        <ScrollContainer
          contentContainerStyle={{
            marginTop: 20,
            justifyContent: 'flex-end',

          }}
        >

          <Group
            style={{
              flex:1,
              zIndex:-1,
            }}
          >
            {
              workshops.map(({
                name,id,image,bio,user_cars,
              }) => (
                <WorkshopCard
                  source={{ uri:image }}
                  bio={bio}
                  key={id}
                  name={name}
                  user_cars={user_cars}
                  onPressWorkShopName={() => this.handleSelectWorkShop(id)}
                  onPress={() => this.handleBooking(id)}
                />
              ))
            }

          </Group>


        </ScrollContainer>
      </Group>

    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

Purchases.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Purchases)
