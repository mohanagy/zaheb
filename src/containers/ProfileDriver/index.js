import React, { Component } from 'react'
import { Dimensions, Switch , PermissionsAndroid } from 'react-native'
import { AirbnbRating } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import {
  Maps ,
  Group, CurvedHeader, Details, Tabs, LabeledInput, ScrollContainer, SelectLogo,
} from 'components'
import Geolocation from '@react-native-community/geolocation'


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import logo from '../../assets/logo.png'

const screen = Dimensions.get('screen')

const UserTab = ({ values, onStatusChange }) => (
  <Group style={{ width: '100%', alignItems: 'stretch' }}>
    <Details
      text="Private details"
      style={{
        color: '#1E1E1E', marginHorizontal: 0, fontSize: 20, alignSelf: 'flex-start',
      }}
    />
    <LabeledInput
      label="Name"
      placeholder={values.name}
      disabled
      {...styles.inputStyle}
    />
    <LabeledInput
      label="Email"
      placeholder={values.email}
      disabled

      {...styles.inputStyle}
    />
    <LabeledInput
      label="Adress"
      placeholder={values.address}
      disabled

      {...styles.inputStyle}
    />
    <LabeledInput
      label="Mobile Number"
      placeholder={values.phone}
      disabled
      {...styles.inputStyle}
    />
    {/* <Group style={{ alignSelf: 'flex-start' }}>
      <Details text="Status:" style={{ color: '#1E1E1E', fontWeight: '100' }} />
      <Switch value={Number(values.status)} onChange={() => onStatusChange} />
    </Group> */}
  </Group>
)

const MapTab = ({ lat,lng }) => (
  <Group style={{ alignItems: 'flex-start' }}>
    <Maps
      options={{
        onMapReady: () => (
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )),

        zoomEnabled: true,
        minZoomLevel: 0,
        defaultZoom: 1,
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
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      }}
      workshops={[]}
      selectedWorkShopId={null}
      style={{ map: { flex: 1,width: '100%',alignSelf: 'center' } }}
    >

    </Maps>

  </Group>
)

const CommentsTab = () => (
  <Group style={{ alignItems: 'flex-start' }}>
  </Group>
)

class ProfileDriver extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Profile',
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

  state = { values: { status: false },user:{} }

  onStatusChange = () => {
    this.setState((state) => ({ ...state, user: { ...state.user, status: !state.values.status } }))
  }

  componentDidMount=async () => {
    const { actions:{ getUserProfile } } = this.props
    const user =  await getUserProfile()
    this.setState({
      user,
    })
    Geolocation.getCurrentPosition((result) => {
      const { coords:{ latitude,longitude } } = result
      this.setState({ lat:latitude,lng:longitude })
    },(error) => {      }, { enableHighAccuracy:true })
  }

  render() {
    const { userData:{ user },navigation:{ navigate } } = this.props
    const { lat,lng } = this.state
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginBottom: 0,
          paddingBottom: 0,
          justifyContent: 'flex-start',
        }}
      >
        <Group style={{ backgroundColor: '#F6F6F6' }}>
          <CurvedHeader type="image" source={logo} />
          <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
            <Details text={user.name} style={{ color: '#1A2960', fontSize: 18 }} />
            <Details text={user.number} style={{ color: '#1A2960', fontSize: 16 }} />
            <Details text={user.address} style={{ color: '#1A2960', fontSize: 12 }} />
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={Math.random() * 4 + 1}
              size={10}
            />
            <Tabs
              defaultActiveTab="user"
              workShopProfile={user}
              options={[
                {
                  icon: 'user',
                  key: 'user',
                  handleChatIcon:() => {},

                  activeContent: () => <UserTab values={user} onStatusChange={this.onStatusChange} />,
                },
                {
                  icon: 'map-marker', key: 'map', activeContent: () => <MapTab lat={lat} lng={lng} />,handleChatIcon:() => {},
                },
                {
                  icon: 'comment', key: 'comments', activeContent: CommentsTab,handleChatIcon:() => { navigate('Conversations') },
                },
              ]}
              tabsWrapperStyle={{ marginHorizontal: (screen.width / 2) - 120 }}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

ProfileDriver.propTypes = {
}

const styles = {
  inputStyle: {
    inputStyle: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      shadowColor: '#BF1E1E1E',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 3,
      marginBottom: 10,
    },
    labelStyle: {
      marginLeft: 10,
    },
  },
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions,dispatch),
})

const mapStateToProps = (state) => ({
  generalData:state.generalData,
  userData:state.userData,
})

ProfileDriver.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileDriver)
