import React from 'react'
import PropTypes from 'prop-types'
import {
  Group, Details, SplashButton,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, AirbnbRating } from 'react-native-elements'

import purchaseImage from '../../assets/purchase_image.png'

export const ProductCard = ({
  name, date, price, liked, type, rating,
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
        source={purchaseImage}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          borderWidth: 0,
        }}
      />
    </Group>
    <Group style={{ flex: 1, marginHorizontal: 6 }}>
      <Group
        style={{
          flexDirection: 'row', justifyContent: 'space-between', height: '90%',
        }}
      >
        <Group style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Details text="Rear view mirror" style={{ ...textsStyle, fontSize: 20, fontWeight: '900' }} />
          <Group style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Details text="Lexlis" style={{ ...textsStyle, fontSize: 18, fontWeight: '600' }} />
            <Details text="Skoda" style={{ ...textsStyle, marginLeft: 5, fontWeight: '100' }} />
          </Group>
          <AirbnbRating
            showRating={false}
            count={5}
            defaultRating={rating}
            size={15}
          />
        </Group>
        <Group style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginVertical: 10 }}>
          <SplashButton
            title="Booking"
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
