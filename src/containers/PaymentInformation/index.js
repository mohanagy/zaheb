import React, { Component } from 'react'
import {
  Group, ScrollContainer, Details, LabeledInput, SplashButton,
} from 'components'
import { Dimensions, Image } from 'react-native'
import backseats from '../../assets/purchase_image.png'

const screen = Dimensions.get('screen')

class PaymentInformation extends Component {
  render() {
    return (
      <ScrollContainer>
        <Group style={{ minHeight: screen.height, backgroundColor: '#F6F6F6', padding: 15 }}>
          <Group
            style={{
              marginVertical: 30, backgroundColor: '#FFF', borderRadius: 15, padding: 10, marginBottom: 45,
            }}
          >
            <Details
              text="Shipping address"
              style={{
                color: '#1E1E1E', borderBottomWidth: 2, borderBottomColor: '#1E1E1E', textAlign: 'left', marginHorizontal: 0, fontSize: 20,
              }}
            />
            <LabeledInput label="Name" placeholder="Reciever name" inputStyle={styles.inputStyle} />
            <LabeledInput label="City" placeholder="Gaza, Gaza city" inputStyle={styles.inputStyle} />
            <LabeledInput label="Street" placeholder="S580" inputStyle={styles.inputStyle} />
            <LabeledInput label="Phone number" placeholder="05900000000" inputStyle={styles.inputStyle} />
          </Group>
          <Group style={{ flexDirection: 'row' }}>
            <Group>
              <Image
                source={backseats}
                style={{
                  width: 80, height: 80, borderRadius: 25, borderWidth: 1, borderColor: '#1E1E1E',
                }}
              />
            </Group>
            <Group style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <Details text="Rear view monitor" style={{ color: '#1E1E1E' }} />
              <Details text="$50" style={{ color: '#1E1E1E' }} />
            </Group>
          </Group>
          <SplashButton
            title="Confirm"
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

PaymentInformation.propTypes = {

}

const styles = {
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1E1E1E',
  },
}

export default PaymentInformation
