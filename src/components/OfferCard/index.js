import React from 'react'
import {
  Group, Details, SplashButton,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native-elements'


export const OfferCard = ({
  description,service:{ car_service_classification },handleCancel,isFetching,
  handleMap,handlePlus,
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
      <Image
        source={{ uri:car_service_classification.image }}
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
          flexDirection: 'row', justifyContent: 'space-between', height:'90%',
        }}
      >
        <Group
          style={{
            alignItems: 'flex-start', justifyContent: 'space-around',flex:1,
          }}
        >
          <Details text={car_service_classification.en_name} style={{ ...textsStyle, fontSize: 20, fontWeight: '900' }} />
          <Details
            text={description}
            style={{
              ...textsStyle, fontSize: 16,flexWrap: 'wrap',
            }}
          />
        </Group>
        <Group
          style={{
            justifyContent: 'space-between', alignItems: 'flex-end', marginVertical: 5,marginRight: 10,
          }}
        >
          <SplashButton title={<FontAwesome5 name="plus" />} style={buttonStyle} loading={isFetching} onPress={handlePlus} />
          <SplashButton style={buttonStyle} title={<FontAwesome5 name="map-marker" />} loading={isFetching} onPress={handleMap} />
          <SplashButton title="cancel" style={buttonStyle} titleStyle={{ fontSize:10 }} onPress={handleCancel} loading={isFetching} />
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

OfferCard.propTypes = {
}

export default OfferCard
