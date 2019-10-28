import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, Details, BackgroundImageWrapper, Logo,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import PropTypes from 'prop-types'


const screen = Dimensions.get('screen')

class HomeType extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home Types',
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
  const { actions:{ getProductsClassification } ,storeData:{ selectedCarId } } = this.props
  await getProductsClassification(selectedCarId)
}

handleSelectProduct =async (id) => {
  const { actions:{ selectProduct } ,navigation:{ navigate } } = this.props
  await selectProduct(id)
  navigate('DetailsOfYourCar')
}

render() {
  const { storeData:{ products } } = this.props
  return (
    <BackgroundImageWrapper style={{ minHeight: screen.height }} source={blurredBackground}>
      <Group
        style={{
          backgroundColor: '#FFFFFFA8', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0,
        }}
      />
      <CurvedHeader content="Contact us" />
      <Group
        style={{
          marginTop: 40,
          marginHorizontal: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
      >
        {
          products.map(({ en_name, image ,id }) => (
            <Group
              style={{
                marginBottom: 22,
              }}
            >
              <Group
                style={{
                  borderRadius: 200,
                  backgroundColor: '#000',
                }}
              >
                <Logo
                  source={{ uri:image }}
                  resizeMode="cover"
                  style={{
                    width: 150,
                    height: 150,
                    overflow: 'hidden',
                  }}
                  containerStyle={{
                    overflow: 'hidden',
                    borderRadius:150,

                  }}
                  onPress={() => this.handleSelectProduct(id)}
                />
              </Group>
              <Details text={en_name} style={{ color: '#000', fontWeight: '900', fontSize: 22 }} />
            </Group>
          ))
        }
      </Group>
    </BackgroundImageWrapper>
  )
}
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
})

HomeType.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeType)
