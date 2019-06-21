import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Layout extends Component {
  render() {
    const { children } = this.props
    return (children)
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
