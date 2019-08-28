import React, { Component } from 'react'
import {
  Group, Details, Conversation, ScrollContainer,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, Dimensions } from 'react-native'
import { Input } from 'react-native-elements'

import man from '../../assets/man.png'

import data from './_data'

const screen = Dimensions.get('screen')

class Chat extends Component {
  render() {
    return (
      <Group
        style={{
          backgroundColor: '#F6F6F6',

          flex: 1,
        }}
      >
        <Group
          style={{
            backgroundColor: '#B0ABAB',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center',
          }}
        >
          <Group><FontAwesome5 name="arrow-left" size={25} color="#FFF" /></Group>
          <Group><Details text="Ahmed Hamed" style={{ color: '#FFF', fontSize: 22 }} /></Group>
          <Group><Image source={man} style={{ width: 50, height: 50, borderRadius: 99 ** 9 }} /></Group>
        </Group>
        <ScrollContainer>
          <Group><Conversation chat={data} /></Group>
        </ScrollContainer>
        <Group style={{ flexDirection: 'row', backgroundColor: '#1E1E1E', padding: 10 }}>
          <Input inputStyle={{ backgroundColor: '#FFF' }} containerStyle={{ width: screen.width - 90, borderBottomWidth: 0, borderRadius: 10 }} />
          <FontAwesome5 name="telegram" size={50} style={{ color: '#FFF', marginLeft: 20 }} />
        </Group>
      </Group>
    )
  }
}

export default Chat
