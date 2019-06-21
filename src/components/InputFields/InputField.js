import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'


const InputField = ({ placeHolder, style }) => (
  <Input
    placeholder={placeHolder}
    {...style}
  >
  </Input>
)

InputField.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default InputField
