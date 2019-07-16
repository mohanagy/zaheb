import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
  Group, CurvedHeader, LabeledInput,
} from 'components'

const screen = Dimensions.get('screen')

class ContactUs extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Group style={{ backgroundColor: '#F6F6F6' }}>
        <CurvedHeader type="text" content="Contact us" />
        <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
          <LabeledInput
            label="Location"
            placeholder="Lorem ipsum dolor sit amet, consectetuer"
            inputStyle={inputStyle}
            underlineColorAndroid="transparent"
            containerStyle={{ ...inputContainerStyle, marginTop: 40 }}
            labelStyle={inputLabelStyle}
          />
          <LabeledInput
            label="Mobile"
            placeholder="00975 264865151"
            inputStyle={inputStyle}
            containerStyle={inputContainerStyle}
            labelStyle={inputLabelStyle}
          />
          <LabeledInput
            label="Email"
            placeholder="Email.11@Email.com"
            inputStyle={inputStyle}
            containerStyle={inputContainerStyle}
            labelStyle={inputLabelStyle}
          />
          <Group
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 200,
              alignSelf: 'center',
            }}
          >
            <FontAwesome5 size={30} name="google-plus" />
            <FontAwesome5 size={30} name="twitter" />
            <FontAwesome5 size={30} name="facebook" />
            <FontAwesome5 size={30} name="instagram" />
          </Group>
        </Group>
      </Group>
    )
  }
}

const inputStyle = {
  backgroundColor: '#FFF',
  borderRadius: 6,
  borderBottom: 'none',
  borderBottomColor: 'rgba(255, 255, 255, 0)',
  paddingHorizontal: 15,
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 10,
}

const inputLabelStyle = {
  marginHorizontal: 10,
  marginBottom: 10,
  fontSize: 16,
}

ContactUs.propTypes = {
}

export default ContactUs
