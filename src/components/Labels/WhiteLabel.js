import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export const WhiteLabel = ({
  title, style, loading, onPress, color,
}) => (
  <View
    style={{
      ...style,
      backgroundColor: color || 'white',
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 14,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      elevation: 2,
      marginHorizontal: 24,

    }}
    loading={loading}
    onPress={onPress}
  >


    <Text
      style={{
        fontFamily: 'HelveticaNeueW23forSKY-Reg',
        fontSize: 12,
      }}
    >
      {title}

    </Text>
  </View>
)

WhiteLabel.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
WhiteLabel.defaultProps = {
  loading: false,
}
export default WhiteLabel
