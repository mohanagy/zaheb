import React, { Component } from 'react'
import { Image,TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Group } from '../Group'
import { Details } from '../Texts'

class FavoriteCard extends Component {
  render() {
    const {
      product:{ name,image },handleSelectProfile,handleRemove,
    } = this.props
    return (

      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 5,
          shadowColor: '#BF1E1E1E',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
          elevation: 3,
          backgroundColor: '#FFF',
          marginBottom: 15,
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity
          onPress={handleSelectProfile}
        >

          <Image source={{ uri:image }} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
          <Details text={name} style={{ color: '#1E1E1E', width: '50%', textAlign: 'left' }} />
        </TouchableOpacity>
        <FontAwesome5 name="heart" solid size={35} style={{ color: 'red' }} onPress={handleRemove} />
      </Group>
    )
  }
}

FavoriteCard.propTypes = {

}

export default FavoriteCard
