import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'


const InputField = ({ placeholder, style,disabled }) => (
  <Input
    disabled={disabled}
    placeholder={placeholder}
    {...style}
  >
  </Input>
)

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default InputField
