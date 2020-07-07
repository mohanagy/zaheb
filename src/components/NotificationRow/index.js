import React, { Component } from 'react'
import { Image,TouchableOpacity } from 'react-native'
import { Group, Details } from 'components'

class NotificationRow extends Component {
  render() {
    const {
      image, message, title,handleNotification,created_at,
    } = this.props
    return (
      <TouchableOpacity onPress={handleNotification}>
        <Group style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#1E1E1E' }}>
          <Group style={{ flexDirection: 'row',flexWrap:'wrap',flex:1 }}>
            <Group><Image source={{ uri:image }} style={{ width: 60, height: 60, borderRadius: 99 ** 9 }} /></Group>
            <Group style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Details text={title} style={{ color: '#1E1E1E', fontWeight: '900' }} />
              <Details text={message} style={{ color: '#1E1E1E', textAlign: 'left' }} />
              <Group style={{ flexDirection:'row' }}>
                <Details text={created_at} style={{ color: '#1E1E1E', textAlign: 'left',fontSize:10  }} />
                <Details text="وقت الوصول: " style={{ color: '#1E1E1E', fontWeight: '900' ,fontSize:10 }} />
              </Group>
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
