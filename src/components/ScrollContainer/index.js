import React from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

export const ScrollContainer = ({ children, style, contentContainerStyle }) => (
  <ScrollView
    keyboardShouldPersistTaps="never"
    contentContainerStyle={{
      ...contentContainerStyle,
    }}
    style={style}
  >
    {children}
  </ScrollView>
)

ScrollContainer.propTypes = {
  contentContainerStyle: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default ScrollContainer
