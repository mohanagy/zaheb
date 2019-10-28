import React from 'react'
import {
  Group, Details, SplashButton,
} from 'components'
import { Input } from 'react-native-elements'

const PaymentCredit = () => (
  <Group>
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


)

export default PaymentCredit
