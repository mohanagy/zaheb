import React from 'react'
import { Group, Details } from 'components'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const screen = Dimensions.get('screen')

const SubServiceCard = ({ icon, name }) => (
  <Group
    style={{
      flexDirection: 'row',
      marginTop: 15,
      margintBottom: 15,
      marginHorizontal: 25,
      borderRadius: 15,
      backgroundColor: '#FFF',
    }}
  >
    <Group
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        width: 120,
        paddingVertical: 25,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      }}
    >
      <FontAwesome5 name={icon} size={70} style={{ color: '#FFF' }} />
    </Group>
    <Group
      style={{
        justifyContent: 'center', alignItems: 'center', width: screen.width - 170,
      }}
    >
      <Details text={name} style={{ color: '#1E1E1E', marginHorizontal: 0 }} />
    </Group>
  </Group>
)

export default SubServiceCard
