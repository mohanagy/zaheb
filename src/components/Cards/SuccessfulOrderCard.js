import React from 'react'
import PropTypes from 'prop-types'
import { Group } from 'components'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
const SuccessfulOrderCard = ({ price }) => (
  <Group
    style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      elevation: 2,
      backgroundColor: '#ffffff',
      padding: 24,
      margin: 24,


    }}
  >
    <Icon
      name="check-circle"
      type="font-awesome"
      size={50}
      iconStyle={{
        color: '#13ce66',
      }}
    />
    <Group>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Bd',
          color: '#233142',
          fontSize: 16,

        }}
      >
 تم توصيل الطلب بنجاح

      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          color: '#233142',
        }}
      >
المبلغ الكلي المطلوب من الزبون هو

      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Bd',
          color: '#ff4949',
          fontSize: 24,
        }}
      >
        {price}
      </Text>
    </Group>


  </Group>
)
SuccessfulOrderCard.propTypes = {
  price: PropTypes.string.isRequired,
}
export default SuccessfulOrderCard
