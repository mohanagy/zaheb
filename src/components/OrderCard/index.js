import React from 'react'
import { TouchableOpacity , Dimensions } from 'react-native'
import {
  Group, Details, SplashButton,
} from 'components'
import { Image } from 'react-native-elements'


const screen = Dimensions.get('screen')

export const OrderCard = ({
  handleAccept,handleSelectProfile,source,name,
  handleCancel,
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
        width: '50%',
        borderRightWidth: 1,
        borderColor: '#000',
      }}
    >
      <TouchableOpacity
        onPress={handleSelectProfile}
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
        <Group style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleSelectProfile}
          >
            <Details text={name} style={{ ...textsStyle, fontSize: screen.width > 600 ? 16 : 10, fontWeight: '900' }} />
          </TouchableOpacity>
        </Group>
        <Group style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginVertical: 10 }}>
          {/* <SplashButton title="accept" style={buttonStyle} /> */}
          {/* <SplashButton title="cancel" style={buttonStyle}  /> */}
        </Group>
      </Group>
    </Group>
  </Group>
)

const textsStyle = {
  marginHorizontal: 0,
  color: '#000',
  fontSize: screen.width > 600 ? 14 : 10,
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#1e1e1e',
    borderRadius: 200,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  titleStyle:{
    fontSize: screen.width > 600 ? 14 : 10,

  },
  containerStyle:{
    paddingVertical:3,
  },
}

OrderCard.propTypes = {
}

export default OrderCard
