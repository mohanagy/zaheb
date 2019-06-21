import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export const DetailsLabel = ({
  label, style, loading, onPress, value, color, textStyle,
}) => (
  <View
    style={{
      ...style,
      backgroundColor: color || 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    }}
    loading={loading}
    onPress={onPress}
  >


    <Text
      style={{
        fontFamily: 'HelveticaNeueW23forSKY-Reg',
        fontSize: 12,
        color: '#99a9bf',
        marginRight: 18,
        marginLeft: 20,
        ...textStyle,

      }}
    >
      {label}

    </Text>
    <Text
      style={{
        fontFamily: 'HelveticaNeueW23forSKY-Reg',
        fontSize: 12,
        color: '#233142',
        marginRight: 'auto',
        ...textStyle,

      }}
    >
      {value}

    </Text>
  </View>
)

DetailsLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
DetailsLabel.defaultProps = {
  loading: false,
}
export default DetailsLabel
