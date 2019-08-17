import React, { Component } from 'react'
import {
  Group, ScrollContainer, CurvedHeader, SplashButton,
} from 'components'
import { Input, Text } from 'react-native-elements'
import { TextInput } from 'react-native'

console.log('TextInput', TextInput)
class CustomerService extends Component {
  render() {
    return (
      <ScrollContainer>
        <CurvedHeader type="text" content="Customer Service" style={{ marginBottom: 30 }} />
        <Group style={{ marginHorizontal: 15 }}>
          <Text>Title</Text>
          <Input inputStyle={styles.inputStyle.inputStyle} />
          <Text>Your letter</Text>
          <TextInput multiline style={{ ...styles.inputStyle.inputStyle, marginHorizontal: 8 }} numberOfLines={5} />
          <SplashButton
            title="Contact Us"
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

CustomerService.propTypes = {}

const styles = {
  inputStyle: {
    inputStyle: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      shadowColor: '#BF1E1E1E',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 3,
      marginBottom: 15,
    },
    labelStyle: {
      marginLeft: 10,
    },
  },
}

export default CustomerService
