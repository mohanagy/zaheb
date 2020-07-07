import React, { Component } from 'react'
import moment from 'moment'
import { PermissionsAndroid, Platform, ActivityIndicator,BackHandler } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import { NavigationEvents,StackActions } from 'react-navigation'

import {
  Maps,
  Group,
  SplashButton,
  HalfBottomModal,
  NearestServiceModalBody,
} from 'components'
import PropTypes from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DateTimePicker from '@react-native-community/datetimepicker'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions } from 'actions'
import ImagePicker from 'react-native-image-picker'
import I18n from '../../utilites/i18n'

class NearestServiceCenter extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('nearest_service_center'),
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
    isModalVisible: false,
    date: null,
    showTime: false,
    showDate: false,
    time: null,
    driver: 1,
    description: '',
    image: null,
    video: null,
    lat: 22.90162,
    lng: 47.02226,
  };

  toggleModal = () => {
    const { isModalVisible } = this.state
    this.setState({ isModalVisible: !isModalVisible })
  };

  showPicker = mode => {
    this.setState({
      [`show${mode}`]: true,
    })
  };

  setDate = (event, value) => {
    const { date } = this.state
    const newDate = value || date

    this.setState({
      showDate: Platform.OS === 'ios',
      date: newDate,
    })
  };

  setTime = (event, value) => {
    const { time } = this.state
    const newTime = value || time

    this.setState({
      showTime: Platform.OS === 'ios',
      time: newTime,
    })
  };

  handleCreateOrder = async () => {
    const {
      actions: { createOrder, errorHappened, createOffer },
      storeData: { selectedWorkShopId, selectedServiceId, skippedWorkShop },
      navigation: { navigate },
      dispatch,
    } = this.props
    const {
      date,
      time,
      description,
      image,
      video,
      lat,
      lng,
    } = this.state

    if (!date || !time || !description) {
      return dispatch(
        errorHappened({
          type: 'error',
          title: 'Error',
          message: 'يرجى تعبئة جميع الحقول',
        })
      )
    }
    const order = {
      workshop_id: selectedWorkShopId,
      service_id: selectedServiceId,
      need_driver: 1,
      service_time: moment(time).format('HH:mm:ss'),
      service_date: moment(date).format('YYYY-MM-DD'),
      description,
      lat,
      lng,
      image,
      video,
    }

    if (!skippedWorkShop) {
      const success = await createOrder(order)
      if (success) {
        this.toggleModal()
        return   navigate('RequestDetails')
      }
    }
    const success = await createOffer(order)
    if (success) {
      this.toggleModal()
      navigate('Offers')
      dispatch(
        errorHappened({
          type: 'success',
          title: 'Success',
          message: 'تم ارسال طلبك بنجاح',
        })
      )
    }
  };

  clearButton = async () => {
    const {
      actions: { noConfirmationButton },
    } = this.props
    await noConfirmationButton(false)
  };

  componentDidMount = async () => {

    const {
      storeData: { selectedWorkShopId, workshops, newServiceId ,noButton},
      actions: { getWorkShopsByServiceId },
      navigation: { navigate },navigation,
    } = this.props

    if (!selectedWorkShopId) {
      return navigate('WorksShops')
    }
    if (!workshops.length) await getWorkShopsByServiceId(newServiceId)
    Geolocation.getCurrentPosition(
      result => {
        const {
          coords: { latitude, longitude },
        } = result
        this.setState({ lat: latitude, lng: longitude })
      },
      error => {},
      { enableHighAccuracy: true }
    )
    BackHandler.addEventListener('hardwareBackPress', function() {
      if (noButton)      {
        navigate('MyRequests')
      }
      else {
        const popAction = StackActions.pop({n: 1})
        navigation.dispatch(popAction)
      }
    })
  };

  setDriver = async driver => {
    this.setState({
      driver,
    })
  };

  handleChangeText = description => {
    this.setState({
      description,
    })
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    }

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
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

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        this.setState({
          video: response.uri,
        })
      }
    })
  }

  render() {
    const {
      isModalVisible,
      showDate,
      showTime,
      date,
      time,
      driver,
      image,
      video,
      description,
      lat,
      lng,
    } = this.state
    const {
      storeData: { workshops, selectedWorkShopId,serviceByIdWorkshops,newServiceId, isFetching, noButton,skippedWorkShop },
    } = this.props
    const workShop = serviceByIdWorkshops.find((item)=>item.id == newServiceId)



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
        <NavigationEvents onWillBlur={() => this.clearButton()} />
        <Group
          style={{
            zIndex:9999,
          }}
        >

          {showDate && (
            <DateTimePicker
              value={date || new Date()}
              mode="date"
              is24Hour
              display="default"
              onChange={this.setDate}
              style={{
              }}
            />
          )}
          {showTime && (
            <DateTimePicker
              value={time || new Date()}
              mode="time"
              is24Hour
              display="default"
              onChange={this.setTime}
              style={{
              }}
            />
          )}
        </Group>

        <Group
          style={{
            flex: 1,
          }}
        >

          <Maps
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
            workshops={workshops}
            selectedWorkShopId={selectedWorkShopId}
            style={{ map: { flex: 1, width: '100%', alignSelf: 'center' } }}
          ></Maps>

          {noButton ? null : (
            <Group
              style={{
                position: 'absolute', // use absolute position to show button on top of the map
                bottom: '2%', // for center align
                alignSelf: 'center', // for align to right
              }}
            >
              <SplashButton
                title={I18n.t('confirm')}
                onPress={() => this.toggleModal()}
                loading={isFetching}
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
          )}
        </Group>


        {isModalVisible && (
          <HalfBottomModal
            isModalVisible={isModalVisible}
            onBackdropPress={() => this.toggleModal()}
            style={{
              // position: 'absolute', // use absolute position to show button on top of the map
              // top: 0,
              backgroundColor:'red',
              // marginHorizontal: 50,
              zIndex:-1,
            }}
          >
            <NearestServiceModalBody
              title={skippedWorkShop && `${workShop.cost} SAR`}
              showPicker={value => this.showPicker(value)}
              handleCreateOrder={() => this.handleCreateOrder()}
              selectPhotoTapped={() => this.selectPhotoTapped()}
              selectVideoTapped={() => this.selectVideoTapped()}
              driver={driver}
              setDriver={this.setDriver}
              image={image}
              video={video}
              description={description}
              handleChangeText={value => this.handleChangeText(value)}
              date={date}
              time={time}
              isFetching={isFetching}
              skippedWorkShop={skippedWorkShop}
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions }, dispatch),
})

const mapStateToProps = state => ({
  user: state.userData.user,
  storeData: state.storeData,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearestServiceCenter)
