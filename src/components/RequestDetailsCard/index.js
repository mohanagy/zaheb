import React, { Component } from 'react'
import { Group, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions } from 'react-native'

const screen = Dimensions.get('screen')

const requestDetailsFields = [
  { title: 'requestName', fieldName: 'Request name', icon: 'clipboard-list' },
  { title: 'requestDate', fieldName: 'Request date', icon: 'calendar' },
  { title: 'startingDate', fieldName: 'Starting date', icon: 'calendar' },
  { title: 'ofToHour', fieldName: 'Of to hour', icon: 'clock' },
  { title: 'location', fieldName: 'Location', icon: 'map-marker-alt' },
  { title: 'orderStatus', fieldName: 'Order status', icon: 'exclamation-circle' },
  { title: 'driverName', fieldName: 'Driver name', icon: 'car' },
  { title: 'supplierName', fieldName: 'workShop name', icon: 'hand-holding-usd' },
]

class RequestDetailsCard extends Component {
  render() {
    const { style,request, ...fields } = this.props
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
                <Details text={`${fieldName}: ${fields[title]}`} style={{ color: '#1E1E1E' }} />
              </Group>
            </Group>
          ))
        }
      </Group>
    )
  }
}

export default RequestDetailsCard
