import React, { Component } from 'react'
import { ScrollContainer, ConversationCard } from 'components'

import conversations from './_data'

class Conversations extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          conversations && conversations.map(purchase => <ConversationCard {...purchase} />)
        }
      </ScrollContainer>
    )
  }
}


export default Conversations
