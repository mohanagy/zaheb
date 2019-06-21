import React from 'react'
import { Group } from 'components'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
export const OrderStatus = ({ stage, number, name }) => (
  <Group
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <Group>
      <Icon
        name="check-circle"
        type="font-awesome"
        iconStyle={{
          color: stage >= number ? '#13ce66' : '#c0ccda',
          fontSize: 16,
        }}
      />
      <Text
        style={{
          color: stage >= number ? '#13ce66' : '#c0ccda',
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          fontSize: 10,
        }}
      >
        {name}
      </Text>
    </Group>
    {number !== 4 ? (
      <Icon
        name="chevron-left"
        type="font-awesome"
        iconStyle={{
          color: stage >= number ? '#13ce66' : '#c0ccda',
          fontSize: 14,
        }}
      />
    ) : null}
  </Group>
)

OrderStatus.propTypes = {
  number: PropTypes.number.isRequired,
  stage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default OrderStatus
