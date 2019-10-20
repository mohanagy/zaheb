import React from 'react'
import { Text } from 'react-native'
import { Group } from 'components'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'

export const LabelWithIcon = ({
  label, style, loading, type, onPress, textStyle,
}) => (
  <Group
    style={{
      ...style,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 14,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      elevation: 2,
      width: 340,
      marginBottom: 10,
      marginTop: 10,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,


    }}
    loading={loading}
    onPress={onPress}
  >
    <Group
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
          color: '#1E1E1E',
          justifyContent: 'center',
          ...textStyle,

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
    </Group>
  </Group>
)

LabelWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  textStyle: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,

}
LabelWithIcon.defaultProps = {
  loading: false,
  type: 'solid',
}
export default LabelWithIcon
