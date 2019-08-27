import React, { Component } from 'react'
import {
  Group, BackgroundImageWrapper, ScrollContainer, NotificationRow,
} from 'components'
import { Dimensions } from 'react-native'

import data from './_data'
import bg from '../../assets/blurred-background.png'


const screen = Dimensions.get('screen')

class Notifications extends Component {
  render() {
    return (
      <BackgroundImageWrapper source={bg}>
        <ScrollContainer>
          <Group style={{ minHeight: screen.height, backgroundColor: '#FFF8' }}>
            {data.map(datum => <NotificationRow {...datum} />)}
          </Group>
        </ScrollContainer>
      </BackgroundImageWrapper>
    )
  }
}

Notifications.propTypes = {

}

export default Notifications
