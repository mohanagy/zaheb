import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, FavoriteCard, ScrollContainer,
} from 'components'
import redHeart from '../../assets/red_heart.png'
import temp from './_data'

const screen = Dimensions.get('screen')

class Favorites extends Component {
  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginBottom: 0,
          paddingBottom: 0,
          justifyContent: 'flex-start',
        }}
      >
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          <CurvedHeader type="image" source={redHeart} style={{ marginBottom: 100 }} />
          {temp.map(fav => <FavoriteCard {...fav} />)}
        </Group>
      </ScrollContainer>
    )
  }
}

Favorites.propTypes = {}

export default Favorites
