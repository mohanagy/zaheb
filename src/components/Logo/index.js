import React from 'react'
import { Image } from 'react-native-elements'
import PropTypes from 'prop-types'
export const Logo = ({ source, style }) => (
  <Image
    source={source}
    style={style}
  />

)

Logo.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
}
