import React, { Component } from 'react'
import {
  Group,
  ScrollContainer,
  CurvedHeader,
  OfferDetailsCard,
  SplashButton,
} from 'components'
import { Dimensions, ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions } from 'actions'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class RequestDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('offer_details'),
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
    requestDetailsFields: [
      {
        title: 'requestName',
        fieldName: I18n.t('request_name'),
        icon: 'clipboard-list',
      },
      {
        title: 'requestDate',
        fieldName: I18n.t('request_date'),
        icon: 'calendar',
      },
      {
        title: 'startingDate',
        fieldName: I18n.t('starting_date'),
        icon: 'calendar',
      },
      { title: 'ofToHour', fieldName: I18n.t('of_to_hour'), icon: 'clock' },
      {
        title: 'location',
        fieldName: I18n.t('location'),
        icon: 'map-marker-alt',
      },
    ],
  };

  componentDidMount = async () => {
    const {
      actions: { getOrderById },
      storeData: { orderId },
    } = this.props
    await getOrderById(orderId)
  };

  handleChangeStatus = async (status) => {
    const {
      actions: { changeOrderStatus },
      navigation: { navigate },
    } = this.props

    const response = await changeOrderStatus(status)
    if (status === 2 && response) {
      navigate('HomePage')
    }
    if (status === 3 && response) {
      navigate('Payment')
    }
  };

  handleCords = async (workshopId, serviceId) => {
    const {
      actions: { selectWorkShop, selectService, noConfirmationButton },
      navigation: { navigate },
    } = this.props

    await selectWorkShop(workshopId)
    await selectService(serviceId)
    await noConfirmationButton(true)
    navigate('NearestServiceCenter')
  };

  render() {
    const {
      storeData: { offer, isFetching },
    } = this.props
    const { requestDetailsFields } = this.state
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
          }}>
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <CurvedHeader
            type="image"
            source={{ uri: offer.service.image }}
            fillSource
          />
          <OfferDetailsCard
            style={{ marginBottom: 50 }}
            requestName={
              offer.service && offer.service.car_service_classification.en_name
            }
            requestDate={`${offer.service_date}${offer.service_time}`}
            startingDate={offer.service_date}
            ofToHour={offer.service_time}
            cords="Click here"
            requestDetailsFields={requestDetailsFields}
            handleCords={() => this.handleCords(offer.lat, offer.lng)}
          />
          <Group
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <SplashButton
              onPress={() => this.handleChangeStatus(2)}
              title={I18n.t('cancel_request')}
              style={{
                buttonStyle: {
                  backgroundColor: '#1E1E1E',
                  paddingHorizontal: 15,
                  borderRadius: 99 ** 9,
                  width: 180,
                  marginBottom: 10,
                },
              }}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

RequestDetails.propTypes = {
  actions: PropTypes.object.isRequired,
  storeData: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions }, dispatch),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  storeData: state.storeData,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestDetails)
