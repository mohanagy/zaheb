import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'


const TextArea = ({ placeholder, style }) => (
  <Input
    multiline
    numberOfLines={4}
    placeholder={placeholder}
    {...style}
  >
  </Input>
)

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default TextArea
