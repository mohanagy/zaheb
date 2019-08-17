import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, ScrollContainer, BackgroundImageWrapper, Details,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import background from '../../assets/blurred-background.png'

const screen = Dimensions.get('screen')

class HomePage extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginBottom: 0,
          paddingBottom: 0,
          justifyContent: 'flex-start',
        }}
      >
        <BackgroundImageWrapper source={background}>
          <Group
            style={{
              backgroundColor: '#ffffff91',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}
          />
          <Group style={{ minHeight: screen.height }}>
            <CurvedHeader style={{ marginBottom: 40 }} />
            <Group style={{ alignItems: 'center' }}>
              <Group
                style={{
                  marginBottom: 15, backgroundColor: '#1E1E1E', borderRadius: 99 ** 9, padding: 20,
                }}
              >
                <FontAwesome5 name="tools" size={55} style={{ color: '#FFF' }} />
              </Group>
              <Details text="Maintenance Services" style={{ marginBottom: 20, color: '#1E1E1E', fontSize: 22 }} />
              <Group
                style={{
                  marginBottom: 15, backgroundColor: '#1E1E1E', borderRadius: 99 ** 9, padding: 20,
                }}
              >
                <FontAwesome5 name="store" size={55} style={{ color: '#FFF' }} />
              </Group>
              <Details text="Store" style={{ marginBottom: 20, color: '#1E1E1E', fontSize: 22 }} />
            </Group>
          </Group>
        </BackgroundImageWrapper>
      </ScrollContainer>
    )
  }
}

HomePage.propTypes = {}

export default HomePage
