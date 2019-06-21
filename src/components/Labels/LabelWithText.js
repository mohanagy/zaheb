import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export const LabelWithText = ({
  label, value, style, loading, type, onPress,
}) => (
  <View
    style={{
      ...style,
      backgroundColor: 'white',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 14,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      elevation: 2,
      width: 340,
      marginBottom: 10,
      marginTop: 10,

    }}
    loading={loading}
    type={type}
    onPress={onPress}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
      }}
    >


      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: '#c0ccda',
          justifyContent: 'center',

        }}
      >
        {label}

      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: '#233142',

        }}
      >
        {value}

      </Text>
    </View>
  </View>
)

LabelWithText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
LabelWithText.defaultProps = {
  loading: false,
  type: 'solid',
}
export default LabelWithText
