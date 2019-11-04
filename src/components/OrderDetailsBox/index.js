import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import {
  Group, OrderStatus, DetailsLabel, ColorFullButton,
} from 'components'
export class OrderDetailsBox extends Component {
  render() {
    const {
      stage, details, orderNumber, paid, remains, clientOrder,
    } = this.props
    return (
      <Group
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          elevation: 2,
          boxSizing: 'border-box',
          paddingBottom: 20,
          margin: 24,
        }}
      >
        <Group
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'center',
            paddingVertical: 20,
          }}
        >
          <OrderStatus
            stage={stage}
            number={1}
            name="تم الإرسال"
          />
          <OrderStatus
            stage={stage}
            number={2}
            name="تم قبول الطلب"
          />
          <OrderStatus
            stage={stage}
            number={3}
            name="الطلب قيد الوصول"
          />
          <OrderStatus
            stage={stage}
            number={4}
            name="تم التوصيل"
          />
        </Group>
        {details && details.map((({ label, value }) => (
          <DetailsLabel
            label={label}
            value={value}
          />
        )))}
        <Group
          style={{
            flexDirection: 'row',
            marginHorizontal: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {clientOrder && (
            <Group>
              <Text
                style={{
                  textAlign: 'left',

                }}
              >
                {orderNumber}

              </Text>
              <ColorFullButton
            title={stage !== 4 ? 'الغاء الطلب' : paid ? 'تم الدفع' : `غير مدفوع   ${remains} شيكل`}//eslint-disable-line
            color={stage == 1 ? '#F85959' : paid ? '#13ce66' : '#f7ba2a'}//eslint-disable-line
                icon={paid ? 'check-circle' : undefined}
                width="60%"
                disabled={stage > 1 && stage < 4}
                containerStyle={{
                  justifyContent: 'space-between',
                  padding: 'auto',
                }}
                buttonStyle={{
                  paddingHorizontal: 10,
                  justifyContent: stage === 4 ? 'space-between' : 'center',
                }}
              />
            </Group>
          )}
        </Group>
      </Group>

    )
  }
}

OrderDetailsBox.propTypes = {
  stage: PropTypes.number.isRequired,
  details: PropTypes.array.isRequired,
  orderNumber: PropTypes.string.isRequired,
  paid: PropTypes.bool.isRequired,
  remains: PropTypes.number.isRequired,
  clientOrder: PropTypes.bool.isRequired,
}


export default OrderDetailsBox
