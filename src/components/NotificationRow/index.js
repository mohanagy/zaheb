import React, { Component } from 'react'
import { Image,TouchableOpacity } from 'react-native'
import { Group, Details } from 'components'

class NotificationRow extends Component {
  render() {
    const {
      image, message, title ,handleClickOnNotification,
    } = this.props
    return (
      <TouchableOpacity
        onPress={handleClickOnNotification}
      >

        <Group style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#1E1E1E' }}>
          <Group style={{ flexDirection: 'row' }}>
            <Group><Image source={{ uri:image }} style={{ width: 60, height: 60, borderRadius: 99 ** 9 }} /></Group>
            <Group style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Details text={title} style={{ color: '#1E1E1E', fontWeight: '900' }} />
              <Details text={message} style={{ color: '#1E1E1E', textAlign: 'left' }} />
            </Group>
          </Group>
        </Group>
      </TouchableOpacity>
    )
  }
}

NotificationRow.propTypes = {

}

export default NotificationRow
