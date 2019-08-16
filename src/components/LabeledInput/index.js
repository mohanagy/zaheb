import React from 'react'
import PropTypes from 'prop-types'
import { Input, Text } from 'react-native-elements'

import { Group } from 'components'

export const LabeledInput = (props) => {
  const {
    containerStyle, labelStyle, inputStyle, placeholder, label,
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
      >
      </Input>
    </Group>
  )
}

LabeledInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  label: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,
}

LabeledInput.defaultProps = {
  inputStyle: {},
  labelStyle: {},
  containerStyle: {},
}
