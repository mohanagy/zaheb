import React from 'react'
import PropTypes from 'prop-types'
import { Group, Title, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native-elements'

import purchaseImage from '../../assets/man.png'

export const ConversationCard = ({
  from, message_count: messageCount, at, friendly_time: friendlyTime,
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
    }}
  >
    <Group
      style={{
        width: 80, height: 80, margin: 6, borderRadius: 99 ** 9, borderWidth: 1, borderColor: '#000',
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
          borderBottomWidth: 1,
          borderColor: '#000',
          width: '100%',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Title
          style={{
            color: '#000', fontSize: 18, marginHorizontal: 0, fontWeight: '100',
          }}
          text={from}
        />
        {
          messageCount > 1 && (
            <Details
              text={messageCount < 10 ? messageCount : '9+'}
              style={{
                backgroundColor: '#BE1522',
                borderRadius: 50,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                verticalAlgin: 'center',
              }}
            />
          )
        }
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
          <FontAwesome5 size={20} name="calendar" color="#BE1522" />
          <Details text={at} style={{ color: '#000', marginHorizontal: 5 }} />
        </Group>
        <Group
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 size={20} name="clock" color="#BE1522" />
          <Details
            text={friendlyTime}
            style={{
              color: '#1E1E1E',
            }}
          />
        </Group>
      </Group>
    </Group>
  </Group>
)

ConversationCard.propTypes = {
}

export default ConversationCard
