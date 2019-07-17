import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { ScrollContainer, PurchaseCard } from 'components'

import purchases from './_data'

class Purchases extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          purchases && purchases.map(purchase => <PurchaseCard {...purchase} />)
        }
      </ScrollContainer>
    )
  }
}


export default Purchases
