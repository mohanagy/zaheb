import React from 'react'
import {  Dimensions } from 'react-native'
import { Group, Details, SplashButton } from 'components'
import { Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import I18n from '../../utilites/i18n'

const statuses = {
  '1': I18n.t('new'),
  '2': I18n.t('in_shipping'),
  '3': I18n.t('complete'),
  '4': I18n.t('reject'),
  '5': I18n.t('in_progress'),
}

const screen = Dimensions.get('screen')

export const ServiceCard = ({ cost, image, name_service, status,onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    containerStyle={{
      flex:1,
      marginVertical:25,
    }}
  >

    <Group
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        height:'100%',
      }}>


      <Group
        style={{
          width: '40%',
          borderRightWidth: 1,
          borderColor: '#000',
        }}>
        <Image
          source={{ uri: image }}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '90%',
          }}>
          <Group style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
            <Details
              text={name_service}
              style={{
                ...textsStyle,
                fontSize: screen.width > 600 ? 16 : 10,
                fontWeight: '900',
              }}
            />
            <Details
              text={statuses[status]}
              style={{
                ...textsStyle,
                fontSize: screen.width > 600 ? 14 : 10,
                flexWrap: 'wrap',
                flex: 1,
              }}
            />
            <Details text={`Price: ${cost} SAR`} style={textsStyle} />
          </Group>
          <Group
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginVertical: 10,
            }}>
          </Group>
        </Group>
      </Group>

    </Group>
  </TouchableOpacity>
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
  titleStyle: {
    fontSize: screen.width > 600 ? 14 : 10,
  },
}

ServiceCard.propTypes = {}

export default ServiceCard
