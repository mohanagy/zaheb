import React, { Component } from 'react'
import { WorkerOrderCard, Group, ScrollContainer } from 'components'

export default class OrdersNotPaid extends Component {
    static navigationOptions = {
      title: 'طلبات تحتاج الى تحصيل',
      headerTitleStyle: {
        fontFamily: 'HelveticaNeueW23forSKY-Bd',
        fontWeight: '200',
      },
    };

    state={
      orders: [{
        status: 'مصطفى محمد',
        paid: 40,
        orderNumber: 'AGO - 0000002',
        date: '18 - 3 - 2019',
      },
      {
        status: 'صلاح محمود',
        paid: 20,
        orderNumber: 'AGO - 0000003',
        date: '18 - 3 - 2019',
      }, {
        status: 'محمود علي محمد',
        paid: 130,
        orderNumber: 'AGO - 0000004',
        date: '18 - 3 - 2019',
      }, {
        status: 'خميس ابو احمد',
        paid: 10,
        orderNumber: 'AGO - 0000005',
        date: '18 - 3 - 2019',
      }, {
        status: 'يوسف صلاح الدين',
        paid: 5,
        orderNumber: 'AGO - 0000006',
        date: '18 - 3 - 2019',
      }, {
        status: 'سمير عبد الله',
        paid: 230,
        orderNumber: 'AGO - 0000007',
        date: '18 - 3 - 2019',
      }, {
        status: 'صلاح محمود',
        paid: 20,
        orderNumber: 'AGO - 0000008',
        date: '18 - 3 - 2019',
      },
      {
        status: 'محمود علي محمد',
        paid: 130,
        orderNumber: 'AGO - 0000009',
        date: '18 - 3 - 2019',
      },
      {
        status: 'خميس ابو',
        paid: 10,
        orderNumber: 'AGO - 0000010',
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
              {
                status, orderNumber, date, paid,
              }
            ) => (
              <WorkerOrderCard
                topRightText={status}
                topRightTextStyle={{
                  color: '#233142',
                  fontFamily: 'HelveticaNeueW23forSKY-Bd',
                }}
                topLeftText={`${paid} شيكل `}
                topLeftTextStyle={{
                  color: '#ff4949',
                }}
                bottomRightTextLabel="التاريخ"
                bottomRightTextValue={date}
                bottomLeftText={orderNumber}
                bottomLeftTextStyle={{
                  fontFamily: 'HelveticaNeueW23forSKY-Ref',
                }}
              />
            ))}
          </ScrollContainer>
        </Group>
      )
    }
}
