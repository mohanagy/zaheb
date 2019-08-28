import React, { Component } from 'react'
import { Group, Details, ScrollContainer } from 'components'
import { Image, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import backseats from '../../assets/purchase_image.png'

const screen = Dimensions.get('screen')

class ProductOptions extends Component {
  render() {
    return (
      <ScrollContainer>
        <Group>
        </Group>
      </ScrollContainer>
    )
  }
}

ProductOptions.propTypes = {

}

const styles = {
  text: {
    color: '#1E1E1E',
    marginHorizontal: 0,
  },
}

export default ProductOptions
