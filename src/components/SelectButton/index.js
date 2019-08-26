import React, { Component } from 'react'
import { Group } from 'components'

class SelectButton extends Component {
  render() {
    const {
      activeStyle, inactiveStyle, active, style, children,
    } = this.props
    return (
      <Group style={{ ...style, ...(active ? activeStyle : inactiveStyle) }}>
        {children}
      </Group>
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
