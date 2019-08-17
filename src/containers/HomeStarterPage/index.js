import React, { Component } from 'react'
import { Group } from 'components'
import { Image, Dimensions, ImageBackground } from 'react-native'

import background from '../../assets/blurred-background.png'
import logo from '../../assets/logo.png'


const screen = Dimensions.get('screen')

class HomeStarterPage extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{
          height: screen.height,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Group>
          <Image
            style={{
              width: 340, height: 340, alignItems: 'center', justifyContent: 'center',
            }}
            source={logo}
            resizeMode="cover"
          />
        </Group>
      </ImageBackground>
    )
  }
}

HomeStarterPage.propTypes = {

}

export default HomeStarterPage
