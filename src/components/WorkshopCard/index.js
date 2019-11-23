import React from 'react'
import { TouchableOpacity ,Dimensions } from 'react-native'
import {
  Group, Details, SplashButton,
} from 'components'
import { Image, AirbnbRating } from 'react-native-elements'

const screen = Dimensions.get('screen')
export const ProductCard = ({
  name, user_cars, source, rating,onPress,onPressWorkShopName,
}) => (
  <Group
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: '100%',
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
      <TouchableOpacity
        onPress={onPressWorkShopName}
      >

        <Image
          source={source}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderWidth: 0,
          }}
        />
      </TouchableOpacity>
    </Group>
    <Group style={{ flex: 1, marginHorizontal: 6 }}>
      <Group
        style={{
          flexDirection: 'row', justifyContent: 'space-between', height: '90%',
        }}
      >
        <Group style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={onPressWorkShopName}>
            <Details text={name} style={{ ...textsStyle, fontSize: screen.width > 600 ? 20 : 10, fontWeight: '900' }} />
          </TouchableOpacity>
          <Group
            style={{
              flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10,
            }}
          >
            <Details text={(`${user_cars[0].types_of_cars.en_name}/${user_cars[1].types_of_cars.en_name}...`)} style={{ ...textsStyle, fontSize: screen.width > 600 ? 18 : 10, fontWeight: '600' }} />
          </Group>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={rating}
            size={screen.width > 600 ? 19 : 10}
          />
        </Group>
        <Group style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginVertical: 10 }}>
          <SplashButton
            onPress={onPress}
            title="Booking"
            style={{
              buttonStyle: {
                backgroundColor: '#1e1e1e',
                borderRadius: 200,
                paddingHorizontal: 10,
                paddingVertical: 3,
                marginBottom: -15,
              },
              titleStyle:{
                fontSize:screen.width > 600 ? 14 : 10,
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
