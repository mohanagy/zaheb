import React, { Component } from 'react'
import { ScrollContainer, OfferCard } from 'components'

import myOffers from './_data'

class Purchases extends Component {
  render() {
    return (
      <ScrollContainer contentContainerStyle={{ marginTop: 20 }}>
        {
          myOffers && myOffers.map(offer => <OfferCard {...offer} />)
        }
      </ScrollContainer>
    )
  }
}


export default Purchases
