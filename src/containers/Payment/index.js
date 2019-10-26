import React, { Component } from 'react'
import {
  Group, ScrollContainer,PaymentCredit,PaymentButton,PaymentPayPal,
} from 'components'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import PropTypes from 'prop-types'

const screen = Dimensions.get('screen')

class Payment extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
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

  state = {
    activePaymentMethod: 'cashcard',
    methods:[{ method:'cashcard',icon:'credit-card' ,title:'Credit-Card' },{ method:'paypal',icon:'paypal',title:'PayPal' }],
  }

  selectActivePaymentMethod =(method) => {
    this.setState({
      activePaymentMethod:method,
    })
  }

  render() {
    const { activePaymentMethod,methods } = this.state
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <Group
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
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
          {activePaymentMethod === 'cashcard' ? <PaymentCredit /> : <PaymentPayPal />}
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
