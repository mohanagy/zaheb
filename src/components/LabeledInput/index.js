import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'

import { Group } from 'components'

export const LabeledInput = (props) => {
  const {
    containerStyle, labelStyle, inputStyle, label, onChangeText, secureTextEntry,disabled,inputContainerStyle,
    style,    isRequired,rightIcon,placeholder,
  } = props
  return (
    <Group style={containerStyle}>

      <Input
        label={label}
        inputStyle={inputStyle}
        labelStyle={labelStyle}
        inputContainerStyle={{ ...inputContainerStyle }}
        containerStyle={{
        }}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        disabled={disabled}
        required={isRequired}
        rightIcon={rightIcon}
        placeholder={placeholder}


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
