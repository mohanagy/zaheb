import React from 'react'
import { Image } from 'react-native-elements'
// import { Image } from 'react-native'
import PropTypes from 'prop-types'
export const Logo = ({
  source, style, containerStyle, resizeMode, borderRadius,
}) => (
  <Image
    resizeMode={resizeMode}
    borderRadius={borderRadius}
    source={source}
    style={style}
    containerStyle={containerStyle}
  />

)

Logo.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  resizeMode: PropTypes.string,
  borderRadius: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

Logo.defaultProps = {
  resizeMode: undefined,
  borderRadius: 0,
}
