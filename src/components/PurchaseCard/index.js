import React from 'react'
import { TouchableOpacity,Dimensions } from 'react-native'
import { Group, Title, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native-elements'


const screen = Dimensions.get('screen')
export const PurchaseCard = ({
  name, date, cost,source,handleSelectProduct,
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
      <TouchableOpacity onPress={handleSelectProduct}>
        <Image
          source={source}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: 100,
            borderWidth: 0,
          }}
        />
      </TouchableOpacity>
    </Group>
    <Group style={{ flex: 1, marginHorizontal: 6 }}>
      <Group
        style={{
          borderBottomWidth: 1,
          borderColor: '#000',
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <TouchableOpacity onPress={handleSelectProduct}>
          <Title
            style={{
              color: '#000',
              fontSize: 18,
              marginHorizontal: 0,
              fontSize:screen.width > 600 ? 14 : 10,
            }}
            text={name}
          />
        </TouchableOpacity>
      </Group>
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 50,
        }}
      >
        <Group
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 size={screen.width > 600 ? 20 : 10} name="calendar" />
          <Details
            text={date}
            style={{ color: '#000', marginHorizontal: 5,              fontSize:screen.width > 600 ? 14 : 10 }}
          />
        </Group>
        <Group
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Details
            text={`$${cost}`}
            style={{
              backgroundColor: '#B0ABAB',
              borderRadius: 50,
              height: '40%',
              width: '40%',
              fontSize:screen.width > 600 ? 14 : 10,

            }}
          />
        </Group>
      </Group>
    </Group>
  </Group>
)

PurchaseCard.propTypes = {
}

export default PurchaseCard
