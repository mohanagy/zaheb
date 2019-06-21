import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { TouchableButton } from 'components'


const IncrementalInput = ({ placeHolder, style }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: 1,
      marginHorizontal: 30,
    }}
  >
    <TouchableButton
      title="+"
      style={{
        containerStyle: {
          flex: 1,
        },
        buttonStyle: {
          height: 40,
        },
      }}
    />
    <View
      style={{
        flex: 2,
        alignItems: 'center',
        height: 40,
        backgroundColor: '#ffffff',
        color: '#ffffff',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          fontSize: 14,
        }}
      >
1

      </Text>
    </View>
    <TouchableButton
      title="-"
      style={{
        containerStyle: {
          flex: 1,
        },
        buttonStyle: {
          height: 40,
        },
      }}
    />
  </View>
)

IncrementalInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
}
export default IncrementalInput
