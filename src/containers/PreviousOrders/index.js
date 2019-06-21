import React, { Component } from 'react'
import {
  WorkerOrderCard, Group, ScrollContainer,
} from 'components'
export default class PreviousOrders extends Component {
    static navigationOptions = {
      title: 'الطلبات السابقة',
      headerTitleStyle: {
        fontFamily: 'HelveticaNeueW23forSKY-Bd',
        fontWeight: '200',
      },
    };

    state={
      orders: [{
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000002',
        date: '18 - 3 - 2019',
      },
      {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000003',
        date: '18 - 3 - 2019',
      }, {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000004',
        date: '18 - 3 - 2019',
      }, {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000005',
        date: '18 - 3 - 2019',
      }, {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000006',
        date: '18 - 3 - 2019',
      }, {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000007',
        date: '18 - 3 - 2019',
      }, {
        status: 'تم التوصيل',
        orderNumber: 'AGO - 0000008',
        date: '18 - 3 - 2019',
      },
      ],

    }

    render() {
      const { orders } = this.state
      return (
        <Group
          style={{
            backgroundColor: '#F9FAFC',
            flex: 1,

          }}
        >
          <ScrollContainer
            contentContainerStyle={{
              marginLeft: 10,
              justifyContent: 'space-around',
            }
            }
          >
            { orders.map((
              { status, orderNumber, date }
            ) => (
              <WorkerOrderCard
                topRightText={status}
                topLeftText={orderNumber}
                bottomRightTextLabel="التاريخ"
                bottomRightTextValue={date}
                bottomLeftText=""
              />
            ))}
          </ScrollContainer>
        </Group>
      )
    }
}
