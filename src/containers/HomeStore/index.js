import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, Details, BackgroundImageWrapper, Logo,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import data from './_data'

const screen = Dimensions.get('screen')

class HomeStore extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BackgroundImageWrapper
        source={blurredBackground}
      >
        <Group
          style={{
            backgroundColor: '#FFFFFFA8', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0,
          }}
        />
        <CurvedHeader content="Contact us" />
        <Group
          style={{
            marginTop: 40,
            marginHorizontal: 20,
            minHeight: screen.height,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          {
            data.map(({ name, logo }) => (
              <Group style={{ marginBottom: 22 }}>
                <Logo
                  source={logo}
                />
                <Details text={name} style={{ color: '#000', fontWeight: '900' }} />
              </Group>
            ))
          }
        </Group>
      </BackgroundImageWrapper>
    )
  }
}

HomeStore.propTypes = {
}

export default HomeStore
