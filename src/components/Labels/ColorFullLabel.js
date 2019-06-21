import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export const ColorFullLabel = ({
  label, style, loading, onPress, value, color,
}) => (
  <View
    style={{
      ...style,
      backgroundColor: color || 'white',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 14,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      elevation: 2,
      marginBottom: 10,
      marginTop: 10,
      marginHorizontal: 24,

    }}
    loading={loading}
    onPress={onPress}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 18,
      }}
    >


      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: 'white',

        }}
      >
        {label}

      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: 'white',

        }}
      >
        {value}

      </Text>
    </View>
  </View>
)

ColorFullLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
ColorFullLabel.defaultProps = {
  loading: false,
}
export default ColorFullLabel
