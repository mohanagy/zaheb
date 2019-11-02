import React, { Component } from 'react'
import {
  Group, ScrollContainer,PaymentCredit,PaymentButton,PaymentBank ,
} from 'components'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import PropTypes from 'prop-types'
import PayPal from 'react-native-paypal-wrapper'

const screen = Dimensions.get('screen')

class Payment extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Payment',
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

  state = {
    activePaymentMethod: 'cashcard',
    methods:[
      { method:'cashcard',icon:'credit-card' ,title:'Credit-Card' },
      { method:'paypal',icon:'paypal',title:'PayPal' },
      { method:'bank',icon:'piggy-bank',title:'Bank Transfer' },
      { method:'cash',icon:'money-bill-alt',title:'Cash' }],
  }

  selectActivePaymentMethod =(method) => {
    this.setState({
      activePaymentMethod:method,
    })
  }

componentDidMount= () => {
  PayPal.initialize(PayPal.SANDBOX,'AW6JspNUrdZgH925eKygGOqVU1M4sx8-0sJLxd5KlQfSdQug4iIgVB3p2sn6fMBXbc03mhx9T7lFUUXR')
}

  onPress = async (method) => {
    const {
      storeData:{ shippingDetails ,filteredProducts ,selectedProductId },actions:{ placeOrder },navigation:{
        navigate,
      },
    } = this.props
    const product = filteredProducts.find(({ id }) => id === selectedProductId)

    try {
      if (method !== 'cash') { await PayPal.pay({
        price: '50',
        currency: 'USD',
        description: 'Your description goes here',
      }) }
      const order = {
        supplier_id:product.user_id,
        product_id:product.id,
        need_driver:shippingDetails.need_driver || 0,
        payment_type:method === 'cash' ? 1 : 2,
        shipping_name:shippingDetails.receiverName,
        shipping_city:shippingDetails.city,
        shipping_street:shippingDetails.street,
        shipping_phone:shippingDetails.phoneNumber,
      }
      await placeOrder(order)
      await navigate('MyPurchases')
    }
    catch (error) {
      await navigate('MyPurchases')
    }
  }

  render() {
    const { activePaymentMethod,methods } = this.state


    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <Group
            style={{ flexDirection: 'row' }}
          >
            {methods.map(({ method ,icon,title }) => (
              <PaymentButton
                icon={icon}
                title={title}
                method={method}
                activePaymentMethod={activePaymentMethod}
                selectActivePaymentMethod={() => this.selectActivePaymentMethod(method)}
              />
            ))}
          </Group>
          {activePaymentMethod !== 'bank' ? (
            <PaymentCredit
              title={activePaymentMethod === 'cash' ? 'Done' : 'Pay'}
              onPress={() => this.onPress(activePaymentMethod)}
            />
          ) : <PaymentBank  />}
        </Group>
      </ScrollContainer>
    )
  }
}


Payment.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
