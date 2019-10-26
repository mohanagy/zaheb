import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'


const TextArea = ({
  placeholder, style,value,onChangeText,
}) => (
  <Input
    multiline
    numberOfLines={4}
    placeholder={placeholder}
    {...style}
    value={value}
    onChangeText={onChangeText}
  />
)

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default TextArea
