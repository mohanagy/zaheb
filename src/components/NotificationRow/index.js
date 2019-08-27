import React, { Component } from 'react'
import { Image } from 'react-native'
import { Group, Details } from 'components'

class NotificationRow extends Component {
  render() {
    const { avatar, username, description } = this.props
    return (
      <Group style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#1E1E1E' }}>
        <Group style={{ flexDirection: 'row' }}>
          <Group><Image source={avatar} style={{ width: 60, height: 60, borderRadius: 99 ** 9 }} /></Group>
          <Group style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Details text={username} style={{ color: '#1E1E1E', fontWeight: '900' }} />
            <Details text={description} style={{ color: '#1E1E1E', textAlign: 'left' }} />
          </Group>
        </Group>
      </Group>
    )
  }
}

NotificationRow.propTypes = {

}

export default NotificationRow
