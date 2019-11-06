import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Group, Details, SplashButton,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, AirbnbRating } from 'react-native-elements'


export const MyOfferCard = ({
  workshop:{ commercial_register_image,name },offer:{ description },cost,handleMap,handleSelectProfile,
  handleAcceptOffer,
}) => (
  <Group
    style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 130,
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
        onPress={handleSelectProfile}
      >

        <Image
          source={{ uri:commercial_register_image }}
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
        <Group style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleSelectProfile}
          >
            <Details text={name} style={{ ...textsStyle, fontSize: 20, fontWeight: '900' }} />
          </TouchableOpacity>
          <Details
            text={description}
            style={{
              ...textsStyle, fontSize: 16,flexWrap: 'wrap',flex:1,
            }}
          />
          <Group style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={3}
              size={10}
            />
            <Details text="(300 Reviews)" style={{ ...textsStyle, fontSize: 12, color: '#898989' }} />
          </Group>
          <Details text={`Price: ${cost}$`} style={textsStyle} />
        </Group>
        <Group style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginVertical: 10 }}>
          <SplashButton title={<FontAwesome5 name="plus" />} style={buttonStyle} />
          <SplashButton onPress={handleMap} style={buttonStyle} title={<FontAwesome5 name="map-marker" />} />
          <SplashButton title="accept" style={buttonStyle} onPress={handleAcceptOffer} titleStyle={{ fontSize:10 }} />
        </Group>
      </Group>
    </Group>
  </Group>
)

const textsStyle = {
  marginHorizontal: 0,
  color: '#000',
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#1e1e1e',
    borderRadius: 200,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
}

MyOfferCard.propTypes = {
}

export default MyOfferCard
