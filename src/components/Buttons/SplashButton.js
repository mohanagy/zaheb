import React from 'react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const SplashButton = ({
  title, style, loading, icon, type, onPress,
}) => (
  <Button
    title={title}
    {...style}
    loading={loading}
    icon={icon}
    type={type}
    onPress={onPress}
  />


)

SplashButton.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  titleStyle: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.element,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
SplashButton.defaultProps = {
  loading: false,
  icon: undefined,
  type: 'solid',
}
export default SplashButton
