import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

export const Group = ({ style, children }) => (
  <View style={style}>
    {children}
  </View>

)

Group.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}
