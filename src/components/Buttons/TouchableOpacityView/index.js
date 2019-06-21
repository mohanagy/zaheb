import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const TouchableOpacityView = ({ children, handlePress }) => (
  <TouchableOpacity
    onPress={handlePress()}
  >
    {children}
  </TouchableOpacity>
)

TouchableOpacityView.propTypes = {
  children: PropTypes.element.isRequired,
  handlePress: PropTypes.func.isRequired,
}
export default TouchableOpacityView
