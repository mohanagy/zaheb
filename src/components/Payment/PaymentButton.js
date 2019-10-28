import React from 'react'
import { SelectButton,Group,Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const PaymentButton = ({
  method,activePaymentMethod,selectActivePaymentMethod,title,icon,
}) => (
  <SelectButton
    style={{
      ...styles.selectButtonStyle,
      ...(activePaymentMethod === method
        ? styles.selectButtonStyleActive
        : styles.selectButtonStyleInactive),
    }}
    onPress={selectActivePaymentMethod}
  >
    <Group style={{ justifyContent: 'center', alignItems: 'center' }}>
      <FontAwesome5
        name={icon}
        size={60}
        style={{
          ...styles.selectButtonTextStyle,
          ...(activePaymentMethod === method
            ? styles.selectButtonTextStyleActive
            : styles.selectButtonTextStyleInactive),
        }}
      />
    </Group>
    <Details
      text={title}
      style={{
        ...styles.selectButtonTextStyle,
        ...(activePaymentMethod === method
          ? styles.selectButtonTextStyleActive
          : styles.selectButtonTextStyleInactive),
      }}
    />
  </SelectButton>
)


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

export default PaymentButton
