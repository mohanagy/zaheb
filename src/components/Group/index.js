import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export const Group = ({ style, children, onPress }) => (
  onPress ? (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View>
        {children}
      </View>
    </TouchableOpacity>
  ) : (
    <View style={style}>
      {children}
    </View>
  )
)

Group.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  onPress: PropTypes.element.isRequired,

}
