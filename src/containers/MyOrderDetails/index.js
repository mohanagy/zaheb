import React, { Component } from 'react'
import {
  Group, ScrollContainer, CurvedHeader, OfferDetailsCard, SplashButton,
} from 'components'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeActions } from 'actions'


const screen = Dimensions.get('screen')

class MyOrderDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Order Details',
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
      { title: 'productName', fieldName: 'Product name', icon: 'clipboard-list' },
      { title: 'cost', fieldName: 'Cost', icon: 'dollar-sign' },
      { title: 'description', fieldName: 'Description', icon: 'sticky-note' },
    ],
  }

  componentDidMount =async () => {
    const { actions:{ getMyOrderByOrderId },storeData:{ orderId } } = this.props
    await getMyOrderByOrderId(orderId)
  }

  handleChangeStatus =async (status) => {
    const { actions:{ changeOrderStatus },navigation:{ navigate } } = this.props

    const response = await changeOrderStatus(status)
    if (status === 2 && response) { navigate('HomePage') }
    if (status === 3 && response) { navigate('Payment') }
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
    console.log({
      order,
    })
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <CurvedHeader type="image" source={{ uri:order.service.image }} fillSource />
          <OfferDetailsCard
            style={{ marginBottom: 50 }}
            productName={order.service && order.service.en_name}
            description={order.description}
            cost={`${order.cost}`}
            requestDetailsFields={requestDetailsFields}
          />
          <Group style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

MyOrderDetails.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderDetails)
