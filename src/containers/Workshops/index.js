import React, { Component } from 'react'
import { ScrollContainer, WorkshopCard } from 'components'

import workshops from './_data'

class Purchases extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          workshops && workshops.map(workshop => <WorkshopCard {...workshop} />)
        }
      </ScrollContainer>
    )
  }
}


export default Purchases
