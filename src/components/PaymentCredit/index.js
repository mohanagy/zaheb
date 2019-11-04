import React from 'react'
import {
  Group, SplashButton,
} from 'components'

const PaymentCredit = ({ onPress,title }) => (
  <Group
    style={{
      justifyContent: 'center',
      marginBottom: 30,
      flex:1,
    }}
  >
    <SplashButton
      title={title}
      onPress={onPress}
      style={{
        buttonStyle: {
          width: 150, backgroundColor: '#1E1E1E', borderRadius: 99 * 9, alignSelf: 'center',
        },
      }}
    />
  </Group>


)

export default PaymentCredit
