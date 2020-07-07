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
import I18n from '../../utilites/i18n'


const screen = Dimensions.get('screen')
const status = {
  '1': I18n.t('new'),
  '2': I18n.t('in_shipping'),
  '3': I18n.t('complete'),
  '4': I18n.t('reject'),
  '5': I18n.t('in_progress'),
}
class PurchaseDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle:I18n.t('purchase_details') ,
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
      { title: 'requestName', fieldName: I18n.t('request_name'), icon: 'clipboard-list' },
      { title: 'requestDate', fieldName: I18n.t('request_date'), icon: 'calendar' },
      { title: 'location', fieldName:I18n.t('location'), icon: 'map-marker-alt' },
      { title: 'orderStatus', fieldName: I18n.t('order_status'), icon: 'exclamation-circle' },
      { title: 'driverName', fieldName: I18n.t('driver_name'), icon: 'car' },
      { title: 'supplierName', fieldName: I18n.t('supplier_name'), icon: 'hand-holding-usd' },
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
                title={I18n.t('cancel_request')}
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
