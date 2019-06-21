import React, { Component } from 'react'
import { ButtonGroup } from 'react-native-elements'
import PropTypes from 'prop-types'

export class Switch extends Component {
  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const { selectedIndex } = this.state
    const { options, style } = this.props
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={options}
        textStyle={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 14,
          color: '#455d7a',
          alignItems: 'center',
        }}
        containerStyle={{
          width: '45%',
          height: 50,
          borderRadius: 5,
          alignItems: 'center',
        }}
        selectedButtonStyle={{
          backgroundColor: '#2089DC',
        }}
        {...style}
      />
    )
  }
}

Switch.propTypes = {
  options: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
}
export default Switch
