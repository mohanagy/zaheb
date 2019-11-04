import React from 'react'
import PropTypes from 'prop-types'
import { Input, Text } from 'react-native-elements'

import { Group } from 'components'

export const LabeledInput = (props) => {
  const {
    containerStyle, labelStyle, inputStyle, placeholder, label, onChangeText, secureTextEntry,disabled,
    isRequired,
  } = props
  return (
    <Group style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        inputStyle={inputStyle}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        disabled={disabled}
        required={isRequired}
      >
      </Input>
    </Group>
  )
}

LabeledInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  onChangeText: PropTypes.func.isRequired,
  label: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
}

LabeledInput.defaultProps = {
  inputStyle: {},
  labelStyle: {},
  containerStyle: {},
  secureTextEntry: false,
}
