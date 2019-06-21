import React from 'react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const TouchableButton = ({
  title, style, loading, type, onPress,
}) => (
  <Button
    title={title}
    {...style}
    loading={loading}
    type={type}
    onPress={onPress}
  />


)

TouchableButton.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
TouchableButton.defaultProps = {
  loading: false,
  type: 'solid',
}
export default TouchableButton
