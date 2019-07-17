import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { ScrollContainer, RequestCard } from 'components'

import requests from './_data'

class MyRequests extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          requests && requests.map(request => <RequestCard {...request} />)
        }
      </ScrollContainer>
    )
  }
}


export default MyRequests
