import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import PropTypes from 'prop-types'
export const Title = ({ text, style }) => (
  <Text
    PlaceholderContent={<ActivityIndicator />}
    style={{
      textAlign: 'center',
      fontFamily: 'HelveticaNeueW23forSKY-Bd',
      marginHorizontal: 20,
      fontSize: 30,
      color: '#ffffff',
      ...style,
    }}
  >
    {text}
  </Text>

)

Title.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}

export default Title
