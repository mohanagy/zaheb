import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'

export const LabelWithIcon = ({
  label, style, loading, type, onPress,
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
    onPress={onPress}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
      }}
    >


      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: type === 'edit' ? '#233142' : '#c0ccda',
          justifyContent: 'center',

        }}
      >
        {label}

      </Text>
      <Icon
        name={type === 'edit' ? 'edit' : 'plus'}
        type="font-awesome"
        iconStyle={{
          color: '#c0ccda',
        }}
      />
    </View>
  </View>
)

LabelWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
LabelWithIcon.defaultProps = {
  loading: false,
  type: 'solid',
}
export default LabelWithIcon
