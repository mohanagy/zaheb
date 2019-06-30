import React from 'react'
import { Image } from 'react-native-elements'
// import { Image } from 'react-native'
import PropTypes from 'prop-types'
export const Logo = ({ source, style, containerStyle }) => (
  <Image
    source={source}
    style={style}
    containerStyle={containerStyle}
  />

)

Logo.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
}
