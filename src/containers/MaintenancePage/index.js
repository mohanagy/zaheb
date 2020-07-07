import React, { Component } from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'

import {
  Group,
  CurvedHeader,
  Details,
  BackgroundImageWrapper,
  Logo,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'
import I18n from '../../utilites/i18n'


const screen = Dimensions.get('screen')

class MaintenancePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('maintenance_page'),
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
      />
    ),
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
      />
    ),
  });

  state = { filteredCars: [], search: '' };

  componentDidMount = async () => {
    const {
      actions: { checkAuth },
      navigation: { navigate },
      userData: { accessToken },
    } = this.props
    const valid = await checkAuth(accessToken)
    if (!valid) navigate('Login')
    const {
      actions: { getCars },
    } = this.props
    await getCars()
  };

  handleSelectCar = async id => {
    const {
      actions: { selectCar },
      navigation: { navigate },
    } = this.props
    await selectCar(id)
    navigate('SubServices')
  };

  handleSearch = (text) => {
    const {
      storeData: { cars },
    } = this.props

    this.setState({
      search: text,
    })
    if (!text) {
      this.setState({
        filteredCars: cars,
      })
    }
    const filtered = cars.filter((car) =>
      car.en_name.toLowerCase().includes(text.toLowerCase())  || car.ar_name.includes(text)
    )
    this.setState({
      filteredCars: filtered,
    })
  };


  render() {
    const {
      storeData: { cars, isFetching },
    } = this.props
    const { filteredCars, search } = this.state
    const data =
    filteredCars.length || search ? filteredCars : cars

    if (isFetching) {
      return (
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
      )
    }
    return (
      <BackgroundImageWrapper
        source={blurredBackground}
      >
        <Group
          style={{
            backgroundColor: '#FFFFFFA8',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <CurvedHeader />
        <Input
          placeholder="Search" onChangeText={this.handleSearch}
        />
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
          {data.map(({ en_name, ar_name, image: logo, id }) => (
            <Group style={{ marginBottom: 22 }} key={id}>
              <Logo
                source={{ uri: logo }}
                style={{
                  width: 100,
                  height: 100,
                }}
                onPress={() => this.handleSelectCar(id)}
              />
              <Details
                text={I18n.locale === 'ar' ? ar_name || en_name : en_name}
                style={{ color: '#000', fontWeight: '900' }}
              />
            </Group>
          ))}
        </Group>
      </BackgroundImageWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = state => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

MaintenancePage.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintenancePage)
