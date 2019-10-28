import React from 'react'
import {
  Group, Details, SplashButton,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native-elements'


export const ProductCard = ({
  name,number,image,description, user,onPress,cost,
}) => (
  <Group
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 100,
      marginHorizontal: 15,
      backgroundColor: '#FFF',
      marginBottom: 12,
      borderRadius: 7,
      shadowColor: '#691E1E1E',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 4,
      elevation: 5,
      borderWidth: 1,
      borderColor: '#000',
    }}
  >
    <Group
      style={{
        width: 120,
        borderRightWidth: 1,
        borderColor: '#000',
      }}
    >
      <Image
        source={{ uri:image }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          borderWidth: 0,
        }}
      />
    </Group>
    <Group style={{ flex: 1, marginHorizontal: 6 }}>
      <Group style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Group style={{ alignItems: 'flex-start' }}>
          <Details text={name} style={{ ...textsStyle, fontSize: 16, fontWeight: '900' }} />
          <Group style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Details text={description} style={{ ...textsStyle, fontSize: 14, fontWeight: '600' }} />
            <Details text={number} style={{ ...textsStyle, marginLeft: 5, fontWeight: '100' }} />
          </Group>
          <Details text={`By: ${user.name}`} style={{ ...textsStyle,fontSize:12, fontWeight: '600' }} />
          <Details text={`$${cost}`} style={{ ...textsStyle }} />
        </Group>
        <Group style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <FontAwesome5 name="heart" size={20} />
          <SplashButton
            onPress={onPress}
            title="Buy"
            style={{
              buttonStyle: {
                backgroundColor: '#1e1e1e',
                borderRadius: 200,
                paddingHorizontal: 10,
                paddingVertical: 3,
              },
            }}
          />
        </Group>
      </Group>
    </Group>
  </Group>
)

const textsStyle = {
  marginHorizontal: 0,
  color: '#000',
}

ProductCard.propTypes = {
}

export default ProductCard
