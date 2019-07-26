import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, Details, BackgroundImageWrapper, Logo,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import data from './_data'

const screen = Dimensions.get('screen')

class HomeType extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <BackgroundImageWrapper style={{ minHeight: screen.height }} source={blurredBackground}>
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
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          {
            data.map(({ name, logo }) => (
              <Group
                style={{
                  marginBottom: 22,
                }}
              >
                <Group
                  style={{
                    borderRadius: 200,
                    backgroundColor: '#000',
                  }}
                >
                  <Logo
                    source={logo}
                    resizeMode="contain"
                    style={{
                      width: 150,
                      height: 150,
                    }}
                  />
                </Group>
                <Details text={name} style={{ color: '#000', fontWeight: '900', fontSize: 22 }} />
              </Group>
            ))
          }
        </Group>
      </BackgroundImageWrapper>
    )
  }
}

HomeType.propTypes = {
}

export default HomeType
