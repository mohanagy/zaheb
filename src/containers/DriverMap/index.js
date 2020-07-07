import React, { Component } from 'react'
import { PermissionsAndroid, ActivityIndicator } from 'react-native'
import Geolocation from '@react-native-community/geolocation'

import { Maps, Group, SplashButton } from 'components'
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions } from 'actions'
import I18n from '../../utilites/i18n'

class DriverMap extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('your_location'),
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

  state = {
    coordinate: {},
    lat: 22.90162,
    lng: 47.02226,
  };

  componentDidMount = async () => {
    Geolocation.getCurrentPosition(
      result => {
        const {
          coords: { latitude, longitude },
        } = result
        this.setState({
          lat: latitude,
          lng: longitude,
        })
        const { coordinate } = this.state
        if (!coordinate.latitude) {
          this.setState({
            coordinate: {
              latitude,
              longitude,
            },
          })
        }
      },
      error => {},
      { enableHighAccuracy: true }
    )
  };

  onRegionChange = coordinate => {
    this.setState({ coordinate })
  };

  render() {
    const { lat, lng, coordinate } = this.state
    const {
      storeData: { isFetching },
    } = this.props
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
      <Group
        style={{
          flex: 1,
        }}
      >
        <Maps
          coordinate={{
            latitudeDelta: 0.025,
            longitudeDelta: 0.025,
            latitude: lat,
            longitude: lng,
          }}
          onRegionChange={cords => this.onRegionChange(cords)}
          options={{
            onMapReady: () =>
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              ),

            zoomEnabled: true,
            minZoomLevel: 0,
            defaultZoom: 4,
            showsUserLocation: true,
            showUserLocationButton: true,
            followsUserLocation: true,
            initialRegion: {
              latitude: lat,
              longitude: lng,
              latitudeDelta: 1,
              longitudeDelta: 1,
            },
            region: {
              latitude: lat,
              longitude: lng,
              latitudeDelta: 20.1022,
              longitudeDelta: 20.4021,
            },
          }}
          workshops={[]}
          style={{ map: { flex: 1, width: '100%', alignSelf: 'center' } }}
        ></Maps>

        <Group
          style={{
            position: 'absolute', // use absolute position to show button on top of the map
            bottom: '2%', // for center align
            alignSelf: 'center', // for align to right
          }}
        ></Group>
      </Group>
    )
  }
}
DriverMap.propTypes = {
  storeData: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions }, dispatch),
})

const mapStateToProps = state => ({
  user: state.userData.user,
  storeData: state.storeData,
})

export default connect(mapStateToProps, mapDispatchToProps)(DriverMap)
