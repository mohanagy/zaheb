import React from 'react'
import PropTypes from 'prop-types'
import { Group, Title, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

export const RequestCard = ({
  name, date, time, badge = 'New',source,handleSelectRequest,
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
      <TouchableOpacity
        onPress={handleSelectRequest}
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
          borderBottomWidth: 1,
          borderColor: '#000',
          width: '100%',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={handleSelectRequest}
        >

          <Title style={{ color: '#000', fontSize: 18, marginHorizontal: 0 }} text={name} />
        </TouchableOpacity>
        <Details
          style={{
            borderRadius: 50,
            paddingHorizontal: 10,
            paddingVertical: 2,
            backgroundColor: '#B0ABAB',
          }}
          text={badge}
        />
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
          <FontAwesome5 size={20} name="calendar" />
          <Details text={date} style={{ color: '#000', marginHorizontal: 5 }} />
        </Group>
        <Group
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <FontAwesome5 size={20} name="clock" />
          <Details
            text={time}
            style={{ color: '#000', marginHorizontal: 5 }}
          />
        </Group>
      </Group>
    </Group>
  </Group>
)

RequestCard.propTypes = {
}

export default RequestCard
