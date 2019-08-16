import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, Details,
} from 'components'

import _content from './whoWeAreDoc'

const screen = Dimensions.get('screen')

class ContactUs extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Group style={{ backgroundColor: '#F6F6F6' }}>
        <CurvedHeader type="text" content="Who We Are" />
        <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
          <Details text={_content} style={{ color: '#1A2960', fontSize: 16 }} />
        </Group>
      </Group>
    )
  }
}

ContactUs.propTypes = {
}

export default ContactUs
