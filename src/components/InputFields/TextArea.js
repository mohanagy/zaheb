import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'


const TextArea = ({ placeHolder, style }) => (
  <Input
    multiline
    numberOfLines={4}
    placeholder={placeHolder}
    {...style}
  >
  </Input>
)

TextArea.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default TextArea
