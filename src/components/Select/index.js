import React from 'react'

import { Picker } from 'react-native'

export const Select = () => (
  <Picker
    selectedValue="HI"
    style={{
      height: 50,
      flexDirection: 'row-reverse',

    }}
    itemStyle={{
      fontFamily: 'HelveticaNeueW23forSKY-Reg',
      fontWeight: 300,
      textAlign: 'left',
    }}
    onValueChange={() => {}}

  >
    <Picker.Item
      label="المنزل"
      value="المنزل"
    />
  </Picker>
)
