import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export const OrderDetailsLabel = ({
  style, loading, onPress, color, date, price, paid, remains,
}) => (
  <View
    style={{
      ...style,
      backgroundColor: color || 'white',
      height: 60,
      flexDirection: 'row',
      paddingLeft: 14,
      borderRadius: 4,
      elevation: 2,
      marginBottom: 10,
      marginTop: 10,
      marginHorizontal: 24,
      alignItems: 'center',

    }}
    loading={loading}
    onPress={onPress}
  >
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >


      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: '#233142',
          textAlign: 'right',


        }}
      >
        {date}

      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: '#233142',
          textAlign: 'right',

        }}
      >
        {price}
        {' '}
شيكل
      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: '#233142',
          textAlign: 'right',

        }}
      >
        {paid}
        {' '}
شيكل
      </Text>
      <Text
        style={{
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 12,
          color: remains < 15 ? '#13ce66' : remains < 25 ? '#f7ba2a' : '#ff4949',
          textAlign: 'right',

        }}
      >
        {remains}
        {' '}
شيكل

      </Text>
    </View>
  </View>
)

OrderDetailsLabel.propTypes = {
  date: PropTypes.string.isRequired,
  remains: PropTypes.string.isRequired,
  paid: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}
OrderDetailsLabel.defaultProps = {
  loading: false,
}
export default OrderDetailsLabel
