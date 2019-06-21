import React from 'react'
import { Avatar } from 'react-native-elements'
import PropTypes from 'prop-types'
export const ProfileAvatar = ({
  source, style, title, rounded, onPress, activeOpacity, size,
}) => (
  <Avatar
    size={size}
    source={source}
    title={title}
    rounded={rounded}
    {...style}
    onPress={onPress}
    activeOpacity={activeOpacity}

  />

)

ProfileAvatar.propTypes = {
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool.isRequired,
  activeOpacity: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.string.isRequired,
}

ProfileAvatar.defaultProps = {
  onPress: () => {},
}

export default ProfileAvatar
