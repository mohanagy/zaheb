import React, { Component } from 'react'
import { Group, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions,TouchableOpacity } from 'react-native'

const screen = Dimensions.get('screen')


class PurchaseDetailsCard extends Component {
  render() {
    const {
      style,requestDetailsFields,handleCords, ...fields
    } = this.props
    return (
      <Group style={{ marginHorizontal: '5%', ...style }}>
        {
          requestDetailsFields && requestDetailsFields.map(({ title, icon, fieldName }, ix) => (
            <Group style={{ flexDirection: 'row', width: '90%' }}>
              <Group
                style={{
                  backgroundColor: '#B0ABAB',
                  width: 50,
                  padding: 10,
                  borderTopLeftRadius: ix === 0 ? 15 : 0,
                  borderBottomLeftRadius: ix === requestDetailsFields.length - 1 ? 15 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesome5 name={icon} size={30} style={{ color: '#FFF' }} />
              </Group>
              <Group
                style={{
                  backgroundColor: '#FFF',
                  width: 0.9 * screen.width - 50,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  borderTopRightRadius: ix === 0 ? 15 : 0,
                  borderBottomRightRadius: ix === requestDetailsFields.length - 1 ? 15 : 0,
                }}
              >
                {fields.cords && title === 'location'
                  ? (
                    <TouchableOpacity onPress={handleCords}>
                      <Details text="Click here" style={{ color: '#1E1E1E',fontSize:screen.width > 600 ? 14 : 10 }} />
                    </TouchableOpacity>
                  )
                  : <Details text={`${fieldName}: ${fields[title]}`} style={{ color: '#1E1E1E',fontSize:screen.width > 600 ? 14 : 10 }} />}

              </Group>
            </Group>
          ))
        }
      </Group>
    )
  }
}

export default PurchaseDetailsCard
