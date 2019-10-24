import React, { Component } from 'react'
import { Group, Details } from 'components'
import { Image } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'


class Conversation extends Component {
  render() {
    const { conversation,userData:{ user:{ id:userId } } } = this.props
    return (
      <Group>
        {
          conversation.reverse().map(({
            message, updated_at, sender:{ id:senderId,image },id,
          }) => (
            <Group style={{  marginVertical: 5 }} key={id}>
              <Group style={{ flexDirection: senderId === userId ? 'row-reverse' : 'row' }}>
                <Image
                  source={{ uri:image }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 99 ** 9,
                  }}
                />
                <Group>
                  <Details
                    text={message}
                    style={{
                      backgroundColor: senderId === userId ? '#1E1E1E' : '#FFF',
                      textAlign: senderId === userId ? 'right' : 'left',
                      color: senderId === userId ? '#FFF' : '#1E1E1E',
                      padding: 20,
                      borderRadius: 15,
                    }}
                  />
                  <Details text={`SENT ${moment(updated_at).format('HH:mm A')}`} style={{ color: '#B0ABAB', textAlign: senderId === userId ? 'right' : 'left' }} />
                </Group>
              </Group>
            </Group>
          ))
        }
      </Group>
    )
  }
}

Conversation.propTypes = {

}


const mapStateToProps = (state) => ({
  userData:state.userData,
})


export default connect(
  mapStateToProps,
)(Conversation)
