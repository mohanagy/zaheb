import React, { Component } from 'react'
import { ScrollContainer, MyOfferCard,Group } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

class MyOffers extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Offers',
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

componentDidMount = async () => {
  const { actions:{ getWorkshopOffers } } = this.props
  await getWorkshopOffers()
}

handleMap =async (workshopId,serviceId) => {
  const { actions:{ selectWorkShop,selectService },navigation:{ navigate } } = this.props
  await selectWorkShop(workshopId)
  await selectService(serviceId)
  navigate('NearestServiceCenter')
}

handleSelectProfile =async (id) => {
  const { actions:{ selectWorkShop },navigation:{ navigate } } = this.props
  await selectWorkShop(id)
  navigate('ProfileWorkshop')
}

render() {
  const { storeData:{ workshopOffers,isFetching } } = this.props
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
    <ScrollContainer contentContainerStyle={{ marginTop: 20 }}>
      {
        workshopOffers.map((offer) => (
          <MyOfferCard
            handleSelectProfile={() => this.handleSelectProfile(offer.workshop_id)}
            {...offer}
            handleMap={() => this.handleMap(offer.workshop_id,offer.offer.service_id)}
          />
        ))
      }
    </ScrollContainer>
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

MyOffers.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyOffers)
