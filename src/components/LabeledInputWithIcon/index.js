import React, { Component } from 'react'
import { Group, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions, TextInput as Input } from 'react-native'


const screen = Dimensions.get('screen')

class LabeledInputWithIcon extends Component {
  render() {
    const {
      label, icon, containerStyle, labelStyle, inputProps,
    } = this.props
    return (
      <Group style={containerStyle}>
        <Details text={label} style={labelStyle} />
        <Group
          style={{
            flexDirection: 'row', justifyContent: 'center', width: '85%', marginHorizontal: 0.075 * screen.width,
          }}
        >
          <Input {...inputProps} />
          <Group
            style={{
              height: 49,
              width: 49,
              backgroundColor: '#000',
              marginLeft: -10,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome5 name={icon} size={20} color="#FFF" />
          </Group>
        </Group>
      </Group>
    )
  }
}

LabeledInputWithIcon.propTypes = {

}

export default LabeledInputWithIcon
