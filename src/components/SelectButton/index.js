import React, { Component } from 'react'
import { Group } from 'components'
import { TouchableOpacity } from 'react-native'

class SelectButton extends Component {
  render() {
    const {
      activeStyle, inactiveStyle, active, style, children,onPress,
    } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <Group style={{ ...style, ...(active ? activeStyle : inactiveStyle) }}>
          {children}
        </Group>
      </TouchableOpacity>
    )
  }
}

SelectButton.propTypes = {

}

SelectButton.defaultProps = {
  activeStyle: {},
  inactiveStyle: {},
  style: {},
}

export default SelectButton
