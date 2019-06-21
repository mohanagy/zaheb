import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  WorkerOrderCard, Group, ScrollContainer,
} from 'components'


export default class CurrentOrders extends Component {
    static navigationOptions = {
      title: 'الطلبات الحالية',
      headerTitleStyle: {
        fontFamily: 'HelveticaNeueW23forSKY-Bd',
        fontWeight: '200',
      },
    };

    state={
      orders: [{
        status: 'طلب ينتظر القبول',
        stage: 1,
        orderNumber: 'AGO - 0000002',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      },
      {
        status: 'طلب ينتظر القبول',
        stage: 1,
        orderNumber: 'AGO - 0000003',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      }, {
        status: 'طلب مقبول',
        stage: 2,
        orderNumber: 'AGO - 0000004',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      }, {
        status: 'طلب مقبول',
        stage: 2,
        orderNumber: 'AGO - 0000005',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      }, {
        status: 'قيد الوصول',
        stage: 3,
        orderNumber: 'AGO - 0000006',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      }, {
        status: 'قيد الوصول',
        stage: 3,
        orderNumber: 'AGO - 0000007',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      }, {
        status: 'قيد الوصول',
        stage: 3,
        orderNumber: 'AGO - 0000008',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      },
      {
        status: 'تم التوصيل',
        stage: 4,
        orderNumber: 'AGO - 0000009',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      },
      {
        status: 'تم التوصيل',
        stage: 4,
        orderNumber: 'AGO - 0000010',
        date: '18 - 3 - 2019',
        price: '64 شيكل',
        client: {
          clientName: 'مصطفى محمد',
          phoneNumber: '059999999',
        },
      },
      ],

    }

    render() {
      const { orders } = this.state
      const { navigation: { navigate } } = this.props
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
                status, orderNumber, date, stage, client, price,
              }
            ) => (

              <WorkerOrderCard
                topRightText={status}
                topRightTextStyle={{
                    color: stage == 1 ? '#ff4949' : stage == 2 ? '#f7ba2a' : stage == 3 ? '#20a0ff' : '#13ce66',//eslint-disable-line
                }}
                topLeftText={orderNumber}
                bottomRightTextLabel="التاريخ"
                bottomRightTextValue={date}
                bottomLeftText=""
                handlePress={() => {
                  navigate('CurrentOrderDetails', {
                    order: {
                      status, orderNumber, date, stage, client, price,
                    },
                  })
                }}

              />
            ))}
          </ScrollContainer>
        </Group>
      )
    }
}


CurrentOrders.propTypes = {
  navigation: PropTypes.object.isRequired,
}
