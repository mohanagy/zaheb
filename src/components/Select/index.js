import React from 'react'

import { Picker } from 'react-native'

export const Select = ({ options, onValueChange, selectedValue }) => (
  <Picker
    selectedValue={selectedValue}
    style={{
      height: 50,
      flexDirection: 'row-reverse',
      shadowColor: '#000',
      borderWidth: 2,
    }}
    itemStyle={{
      fontFamily: 'HelveticaNeueW23forSKY-Reg',
      fontWeight: 300,
      textAlign: 'left',

    }}
    onValueChange={onValueChange}

  >
    {options.map(element => (
      <Picker.Item
        label={element.label}
        value={element.value}
      />
    ))}
  </Picker>
)
