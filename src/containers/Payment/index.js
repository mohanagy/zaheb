import React, { Component } from 'react'
import {
  Group, ScrollContainer, Details, SelectButton, SplashButton,
} from 'components'
import { Dimensions } from 'react-native'
import { Input } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const screen = Dimensions.get('screen')

class Payment extends Component {
  state = { activePaymentMethod: 'cashcard' }

  render() {
    const { activePaymentMethod } = this.state
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <Group
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
          >
            <SelectButton
              style={{
                ...styles.selectButtonStyle,
                ...(activePaymentMethod === 'cashcard'
                  ? styles.selectButtonStyleActive
                  : styles.selectButtonStyleInactive),
              }}
            >
              <Group style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5
                  name="credit-card"
                  size={60}
                  style={{
                    ...styles.selectButtonTextStyle,
                    ...(activePaymentMethod === 'cashcard'
                      ? styles.selectButtonTextStyleActive
                      : styles.selectButtonTextStyleInactive),
                  }}
                />
              </Group>
              <Details
                text="Credit-Card"
                style={{
                  ...styles.selectButtonTextStyle,
                  ...(activePaymentMethod === 'cashcard'
                    ? styles.selectButtonTextStyleActive
                    : styles.selectButtonTextStyleInactive),
                }}
              />
            </SelectButton>
            <SelectButton
              style={{
                ...styles.selectButtonStyle,
                ...(activePaymentMethod === 'paypal'
                  ? styles.selectButtonStyleActive
                  : styles.selectButtonStyleInactive),
              }}
            >
              <Group style={{ justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5
                  name="paypal"
                  size={60}
                  style={{
                    ...styles.selectButtonTextStyle,
                    ...(activePaymentMethod === 'paypal'
                      ? styles.selectButtonTextStyleActive
                      : styles.selectButtonTextStyleInactive),
                  }}
                />
              </Group>
              <Details
                text="PayPal"
                style={{
                  ...styles.selectButtonTextStyle,
                  ...(activePaymentMethod === 'paypal'
                    ? styles.selectButtonTextStyleActive
                    : styles.selectButtonTextStyleInactive),
                }}
              />
            </SelectButton>
          </Group>
          <Details text="Cardholder's first name*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
          <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
          <Details text="Cardholder's last name*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
          <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
          <Details text="Card Number*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
          <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
          <Group style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 50 }}>
            <Group>
              <Details text="Year*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
              <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
            </Group>
            <Group>
              <Details text="Exp date*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
              <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
            </Group>
            <Group>
              <Details text="Security code*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
              <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
            </Group>
          </Group>
          <SplashButton
            title="Pay"
            style={{
              buttonStyle: {
                width: 150, backgroundColor: '#1E1E1E', borderRadius: 99 * 9, alignSelf: 'center',
              },
            }}
          />
        </Group>
      </ScrollContainer>
    )
  }
}

Payment.propTypes = {

}

const styles = {
  selectButtonStyle: {
    padding: 15,
    margin: 20,
    width: 150,
    borderRadius: 20,
    shadowColor: '#991E1E1E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  selectButtonStyleActive: {
    backgroundColor: '#1E1E1E',
  },
  selectButtonStyleInactive: {
    backgroundColor: '#FFF',
  },
  selectButtonIconStyle: { },
  selectButtonIconStyleActive: {},
  selectButtonIconStyleInactive: {},
  selectButtonTextStyleActive: { color: '#FFF' },
  selectButtonTextStyleInactive: { color: '#1E1E1E' },
}

export default Payment
