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
const status = {
  '1':'New',
  '2':'In Shipping',
  '3':'Complete',
  '4':'Reject',
  '5':'In Progress',
}
class PurchaseDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Purchase Details',
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
      { title: 'location', fieldName: 'Location', icon: 'map-marker-alt' },
      { title: 'orderStatus', fieldName: 'Order status', icon: 'exclamation-circle' },
      { title: 'driverName', fieldName: 'Driver name', icon: 'car' },
      { title: 'supplierName', fieldName: 'Supplier name', icon: 'hand-holding-usd' },
    ],
  }

  componentDidMount =async () => {
    const { actions:{ getProductOrderByOrderId },storeData:{ selectedProductId } } = this.props
    await getProductOrderByOrderId(selectedProductId)
  }

  handleChangeStatus =async (status) => {
    const { actions:{ changeOrderStatus },navigation:{ navigate } } = this.props

    const response = await changeOrderStatus(status)
    if (status === 2 && response) { navigate('HomePage') }
    if (status === 3 && response) { navigate('Payment') }
  }


  render() {
    const { storeData:{ product ,isFetching } } = this.props
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
          <CurvedHeader type="image" source={{ uri:product.product.image }} fillSource />
          <RequestDetailsCard
            style={{ marginBottom: 50 }}
            requestName={product.product.name}
            requestDate={`${product.created_at}`}
            startingDate={product.created_at}
            ofToHour={product.created_at}
            location={`${product.shipping_city} ${product.shipping_street}`}
            orderStatus={product.supplier_status ? status[product.supplier_status] : ''}
            driverName={product.driver || ''}
            supplierName={product.supplier ? product.supplier.name : ''}
            requestDetailsFields={requestDetailsFields}
          />
          <Group
            style={{
              flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',marginBottom:20,
            }}
          >
            {product.supplier_status === '1' ?   (
              <SplashButton
                onPress={() => this.handleChangeStatus(2)}
                title="Cancel Request"
                style={{
                  buttonStyle: {
                    backgroundColor: '#1E1E1E',
                    paddingHorizontal: 15,
                    borderRadius: 99 ** 9,
                    fontSize:screen.width > 600 ? 14 : 10,

                  },
                }}
              />
            ) : null}
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

PurchaseDetails.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseDetails)
