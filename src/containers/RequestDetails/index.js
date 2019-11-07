import React, { Component } from 'react'
import {
  Group, ScrollContainer, CurvedHeader, RequestDetailsCard, SplashButton,
} from 'components'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions } from 'actions'


const screen = Dimensions.get('screen')

class RequestDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Request Details',
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

  state={
    requestDetailsFields : [
      { title: 'requestName', fieldName: 'Request name', icon: 'clipboard-list' },
      { title: 'requestDate', fieldName: 'Request date', icon: 'calendar' },
      { title: 'startingDate', fieldName: 'Starting date', icon: 'calendar' },
      { title: 'ofToHour', fieldName: 'Of to hour', icon: 'clock' },
      { title: 'location', fieldName: 'Location', icon: 'map-marker-alt' },
      { title: 'orderStatus', fieldName: 'Order status', icon: 'exclamation-circle' },
      { title: 'driverName', fieldName: 'Driver name', icon: 'car' },
      { title: 'supplierName', fieldName: 'WorkShop name', icon: 'hand-holding-usd' },
    ],
  }


  componentDidMount =async () => {
    const { actions:{ getOrderById },storeData:{ orderId } } = this.props
    await getOrderById(orderId)
  }

  handleChangeStatus =async (status) => {
    const { actions:{ changeOrderStatus },navigation:{ navigate } } = this.props

    const response = await changeOrderStatus(status)
    if (status === 2 && response) { navigate('HomePage') }
    if (status === 3 && response) { navigate('Payment') }
  }

  handleCords=async (workshopId,serviceId) => {
    const { actions:{ selectWorkShop,selectService },navigation:{ navigate } } = this.props
    await selectWorkShop(workshopId)
    await selectService(serviceId)
    navigate('NearestServiceCenter')
  }

  render() {
    const { storeData:{ order ,isFetching } } = this.props
    const { requestDetailsFields } = this.state
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
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <CurvedHeader type="image" source={{ uri:order.service.image }} />
          <RequestDetailsCard
            style={{ marginBottom: 50 }}
            requestName={order.service.en_name}
            requestDate={`${order.service_date}${order.service_time}`}
            startingDate={order.service_date}
            ofToHour={order.service_time}
            location=""
            orderStatus=""
            driverName={order.driver || ''}
            supplierName={order.workshop ? order.workshop.name : ''}
            requestDetailsFields={requestDetailsFields}
            cords={order.lat ? { lat:order.lat ,lng:order.lng } : null}
            handleCords={() => this.handleCords(order.workshop_id,order.service_id)}
          />
          <Group style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <SplashButton
              onPress={() => this.handleChangeStatus(2)}
              title="Cancel Request"
              style={{
                buttonStyle: {
                  backgroundColor: '#1E1E1E',
                  paddingHorizontal: 15,
                  borderRadius: 99 ** 9,
                  width: 180,
                },
              }}
            />
            <SplashButton
              title="Request Done"
              onPress={() => this.handleChangeStatus(3)}

              style={{
                buttonStyle: {
                  backgroundColor: '#707070',
                  paddingHorizontal: 15,
                  borderRadius: 99 ** 9,
                  width: 180,
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails)
