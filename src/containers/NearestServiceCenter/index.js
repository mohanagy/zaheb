import React, { Component } from 'react'
import _ from 'lodash'
import { PermissionsAndroid, Platform } from 'react-native'
import {
  Maps, Group, SplashButton, HalfBottomModal, NearestServiceModalBody,
} from 'components'
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DateTimePicker from '@react-native-community/datetimepicker'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions, navigationActions } from 'actions'
import ImagePicker from 'react-native-image-picker'


class NearestServiceCenter extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Nearest Service Center',
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
        onPress={() => {}}
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

  state={
    isModalVisible: false,
    date: new Date('2020-06-12T14:42:42'),
    showTime: false,
    showDate: false,
    time: new Date('2020-06-12T14:42:42'),
    driver:1,
    description:'',
    image:null,
    video:null,
    price:50,
    workshop:{},

  }


    toggleModal = () => {
      const { isModalVisible } = this.state
      this.setState({ isModalVisible: !isModalVisible })
    };

    showPicker = (mode) => {
      this.setState({
        [`show${mode}`]: true,
      })
    }

    setDate = (event, value) => {
      const { date } = this.state
      const newDate = value || date

      this.setState({
        showDate: Platform.OS === 'ios',
        date: newDate,
      })
    }

    setTime = (event, value) => {
      const { time } = this.state
      const newTime = value || time

      this.setState({
        showTime: Platform.OS === 'ios',
        time: newTime,
      })
    }

    handleCreateOrder =async()=>{
      const {actions:{createOrder}}=this.props
      const {date,time,driver,description,image,video,price}=this.state
    }
    componentDidMount =async () => {
      const {  storeData: { selectedWorkShopId ,workshops }, navigation: { navigate } } = this.props
      if (!selectedWorkShopId) { return navigate('WorksShops') }
      // const workshop = _.find(workshops,['id',selectedWorkShopId])
    }

    setDriver =async (driver) => {
      this.setDriver({
        driver,
      })
    }

    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      }

      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {}
        else if (response.error) {}
        else if (response.customButton) {}
        else {
          let source
          if (Platform.OS === 'android') {
            source = { uri: response.uri, isStatic: true }
          } else {
            source = { uri: response.uri.replace('file://', ''), isStatic: true }
          }
          this.setState({
            image: source.uri,
          })
        }
      })
    }

    selectVideoTapped() {
      const options = {
        title: 'Video Picker',
        takePhotoButtonTitle: 'Take Video...',
        mediaType: 'video',
        videoQuality: 'medium',
      }

      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.didCancel) {        }
        else if (response.error) {        }
        else if (response.customButton) {        }
        else {
          this.setState({
            video: response.uri,
          })
        }
      })
    }


    render() {
      const {
        isModalVisible, showDate, showTime, date, time,driver,image,video,
      } = this.state
      const { storeData:{ workshops,selectedWorkShopId } } = this.props
      return (
        <Group
          style={{
            flex: 1,
          }}
        >
          <Group
            style={{
              flex: 1,
            }}
          >

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
                  latitude: 22.90162,
                  longitude: 47.02226,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                },
                region: {
                  latitude: 22.90162,
                  longitude: 47.02226,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                },
              }}
              workshops={workshops}
              selectedWorkShopId={selectedWorkShopId}
              style={{ map: { flex: 1,width: '100%',alignSelf: 'center' } }}
            >

            </Maps>

            <Group
              style={{
                position: 'absolute', // use absolute position to show button on top of the map
                bottom: '2%', // for center align
                alignSelf: 'center', // for align to right
              }}
            >
              <SplashButton
                title="Confirm"
                onPress={() => this.toggleModal()}
                style={{
                  buttonStyle: {
                    backgroundColor: '#1E1E1E',
                    paddingHorizontal: 15,
                    borderRadius: 99 ** 9,
                    width: 180,
                    alignSelf: 'center',
                  },
                }}
              />
            </Group>

          </Group>
          { showDate && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour
              display="default"
              onChange={this.setDate}
            />
          )}
          { showTime && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour
              display="default"
              onChange={this.setTime}
            />
          )}

          {isModalVisible && (
            <HalfBottomModal
              isModalVisible={isModalVisible}
              onBackdropPress={() => this.toggleModal()}
              style={{
                position: 'absolute', // use absolute position to show button on top of the map
                top: 0,
                marginHorizontal: 50,
              }}
            >
              <NearestServiceModalBody
                title="50USD"
                showPicker={(value) => this.showPicker(value)}
                onPress={() => this.handleCreateOrder()}
                selectPhotoTapped={() => this.selectPhotoTapped()}
                selectVideoTapped={() => this.selectVideoTapped()}
                driver={driver}
                setDriver={() => this.setDriver}
                image={image}
                video={video}

              />

            </HalfBottomModal>
          )}
        </Group>
      )
    }
}
NearestServiceCenter.propTypes = {
  navigation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  storeData: PropTypes.object.isRequired,

}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions }, dispatch),
  navigateScreen: navigationActions.navigate(dispatch),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  storeData: state.storeData,
})

export default connect(mapStateToProps, mapDispatchToProps)(NearestServiceCenter)
