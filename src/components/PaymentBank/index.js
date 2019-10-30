import React from 'react'

import {
  Group, SplashButton,
} from 'components'
const PaymentBank = ({ onPress }) => (
  <Group
    style={{
      justifyContent: 'center',
      marginBottom: 30,
      flex:1,
    }}
  >
    {/* <Details text="Cardholder's first name*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
    <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
    <Details text="Cardholder's last name*:" style={{ color: '#1E1E1E', alignSelf: 'flex-start' }} />
    <Input inputStyle={{ backgroundColor: '#FFF', border: 'none', borderRadius: 5 }} inputContainerStyle={{ borderBottomWidth: 0 }} />
 */}

    <SplashButton
      title="Pay"
      onPress={onPress}
      style={{
        buttonStyle: {
          width: 150, backgroundColor: '#1E1E1E', borderRadius: 99 * 9, alignSelf: 'center',
        },
      }}
    />
  </Group>

)

export default PaymentBank
