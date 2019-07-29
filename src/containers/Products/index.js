import React, { Component } from 'react'
import { ScrollContainer, ProductCard } from 'components'

import products from './_data'

class Purchases extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          products && products.map(purchase => <ProductCard {...purchase} />)
        }
      </ScrollContainer>
    )
  }
}


export default Purchases
