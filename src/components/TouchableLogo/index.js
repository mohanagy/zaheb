import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
// import { Image } from 'react-native'
import PropTypes from 'prop-types'
export const TouchableLogo = ({
  source, style, containerStyle, resizeMode, borderRadius, onPress,
}) => (
  <TouchableOpacity onPress={onPress}>

    <Image
      resizeMode={resizeMode}
      borderRadius={borderRadius}
      source={source}
      style={style}
      containerStyle={containerStyle}
    />
  </TouchableOpacity>


)

TouchableLogo.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  resizeMode: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  borderRadius: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

TouchableLogo.defaultProps = {
  resizeMode: undefined,
  borderRadius: 0,
}
