import React, { Component } from 'react'
import { Slider } from 'components'
import logo from 'assets/intro_01.png'

class Splash extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <Slider navigate={navigate} />
    )
  }
}

export default Splash
