import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import PropTypes from 'prop-types'
const Details = ({ text, style }) => (
  <Text
    PlaceholderContent={<ActivityIndicator />}
    style={{
      textAlign: 'center',
      fontFamily: 'HelveticaNeueW23forSKY-Reg',
      marginHorizontal: 20,
      color: '#ffffff',
      ...style,
    }}
  >
    {text}
  </Text>

)

Details.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}

export default Details
