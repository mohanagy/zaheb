import React from 'react'
import { ImageBackground, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

export const BackgroundImageWrapper = ({ children, source, style }) => (
  <ImageBackground source={source} style={style}>
    <ScrollView>{children}</ScrollView>
  </ImageBackground>
)

BackgroundImageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  source: PropTypes.string.isRequired,
  style: PropTypes.object,
}

BackgroundImageWrapper.defaultProps = {
  style: {},
}
