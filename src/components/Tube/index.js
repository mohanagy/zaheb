import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Image } from 'react-native-elements'
import PropTypes from 'prop-types'
import selectedTube from 'assets/selectedTube.png'
import emptyTube from 'assets/emptyTube.png'

export const Tube = ({
  style, selected, onPress, id, size,
}) => (
  <TouchableOpacity
    style={style.touch}
    onPress={() => onPress(id)}
  >

    <Image
      source={selected === id ? selectedTube : emptyTube}
      style={style.image}
    />
  </TouchableOpacity>

)

Tube.propTypes = {
  style: PropTypes.object,
  selected: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
}

Tube.defaultProps = {
  style: {
    image: StyleSheet.create({
      height: 60,
      width: 47,
      marginHorizontal: 5,
      marginTop: 5,
    }),
  },
}
