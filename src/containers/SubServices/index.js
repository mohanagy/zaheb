import React, { Component } from 'react'
import { Group, SubServiceCard, ScrollContainer } from 'components'
import { Dimensions } from 'react-native'

const screen = Dimensions.get('screen')

const subServices = [
  { icon: 'lightbulb', name: 'Change the lamps' },
  { icon: 'tools', name: 'Engine Maintenance' },
  { icon: 'oil-can', name: 'Change oil' },
  { icon: 'car-battery', name: 'Battery recharge' },
  { icon: 'car-battery', name: 'Battery recharge' },
  { icon: 'car-battery', name: 'Battery recharge' },
]

class SubServices extends Component {
  render() {
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          {
            subServices.map(subService => <SubServiceCard {...subService} />)
          }
        </Group>
      </ScrollContainer>
    )
  }
}

SubServices.propTypes = {

}

export default SubServices
