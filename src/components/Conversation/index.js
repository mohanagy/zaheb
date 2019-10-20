import React, { Component } from 'react'
import { Group, Details } from 'components'
import { Image } from 'react-native'
import moment from 'moment'
import userBlack from '../../assets/male-user-black.svg'
import userPurple from '../../assets/male-user-purple.svg'

class Conversation extends Component {
  render() {
    const { chat: { collaborators, chat } } = this.props
    return (
      <Group>
        {
          chat && chat.map(({
            content, time, senderId,
          }) => {
            const actor = collaborators.find((({ id }) => id === senderId))
            return (
              <Group style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <Group style={{ flexDirection: actor.current ? 'row-reverse' : 'row' }}>
                  <Image
                    source={actor.avatar}
                    style={{
                      width: 50, height: 50, borderRadius: 99 ** 9,
                    }}
                  />
                  <Group>
                    <Details
                      text={content}
                      style={{
                        backgroundColor: actor.current ? '#1E1E1E' : '#FFF',
                        textAlign: actor.current ? 'right' : 'left',
                        color: actor.current ? '#FFF' : '#1E1E1E',
                        padding: 20,
                        borderRadius: 15,
                      }}
                    />
                    {console.log('moment(time * 1000).format)', moment(time * 1000).format('SENT HH:mm A'))}
                    <Details text={`SENT ${moment(time * 1000).format('HH:mm A')}`} style={{ color: '#B0ABAB', textAlign: actor.current ? 'right' : 'left' }} />
                  </Group>
                </Group>
              </Group>
            )
          })
        }
      </Group>
    )
  }
}

Conversation.propTypes = {

}

export default Conversation
