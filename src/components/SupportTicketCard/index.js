import React from 'react'
import moment from 'moment'
import { Group, Title, Details } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity,Dimensions } from 'react-native'

const screen = Dimensions.get('screen')
export const SupportTicketCard = ({
  messageCount = 0,updated_at ,handleSelectSupportTicket,id,user_id,title,message,

}) => (
  <TouchableOpacity onPress={handleSelectSupportTicket}>

    <Group
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: 30,
        backgroundColor: '#FFF',
        marginBottom: 12,
        borderRadius: 7,
        shadowColor: '#691E1E1E',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4,
        elevation: 5,

      }}
    >
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
              color: '#000', fontSize: screen.width > 600 ? 14 : 10, marginHorizontal: 0, fontWeight: '600',
            }}
            text={title}
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
        <Group>

          <Title
            style={{
              color: '#000', fontSize: screen.width > 600 ? 14 : 10, marginHorizontal: 0, fontWeight: '600',

            }}
            text={message}
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
            <FontAwesome5 size={screen.width > 600 ? 20 : 10} name="calendar" color="#BE1522" />
            <Details
              text={updated_at && moment(updated_at).format('DD/MM/YYYY')}
              style={{
                color: '#000',
                marginHorizontal: 5,
                fontSize: screen.width > 600 ? 14 : 10,
              }}
            />
          </Group>
          <Group
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <FontAwesome5 size={screen.width > 600 ? 20 : 10} name="clock" color="#BE1522" />
            <Details
              text={updated_at && moment(updated_at).fromNow()}
              style={{
                color: '#1E1E1E',
                fontSize: screen.width > 600 ? 14 : 10,
              }}
            />
          </Group>
        </Group>
      </Group>
    </Group>
  </TouchableOpacity>

)

SupportTicketCard.propTypes = {
}

export default SupportTicketCard
