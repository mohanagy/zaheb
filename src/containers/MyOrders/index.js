import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import profilePic from 'assets/profilePic.png'
import { ProfileAvatar, ScrollContainer, OrderDetailsBox } from 'components'
class MyOrders extends Component {
  static navigationOptions = {
    title: 'طلباتي',
    headerRight: (
      <ProfileAvatar
        size="small"
        source={profilePic}
        style={{
          containerStyle: {
            paddingRight: 10,
            height: '50%',
          },
        }}
        rounded
        title="MT"
        activeOpacity={0.7}

      />),
    headerTitleStyle: {
      fontFamily: 'HelveticaNeueW23forSKY-Bd',
      fontWeight: '200',
    },
  };

  state={
    details: {
      'AGO - 0000001': [
        {
          label: 'الوزن',
          value: '12 كيلو',
        },
        {
          label: 'النوع',
          value: 'عادي -جديد',
        },
        {
          label: 'الكمية',
          value: '1',
        },
        {
          label: 'العنوان',
          value: 'المنزل خانيونس - شارع جلال - عمارة الأمل',
        },
        {
          label: 'السعر',
          value: '64 شيكل',
        },
        {
          label: 'التاريخ',
          value: '21 - 3 - 2019',
        },
      ],
      'AGO - 0000002': [
        {
          label: 'الوزن',
          value: '12 كيلو',
        },
        {
          label: 'النوع',
          value: 'مستعجل -جديد',
        },
        {
          label: 'الكمية',
          value: '1',
        },
        {
          label: 'العنوان',
          value: 'المنزل خانيونس - شارع جلال - عمارة الأمل',
        },
        {
          label: 'السعر',
          value: '64 شيكل',
        },
        {
          label: 'التاريخ',
          value: '21 - 3 - 2019',
        },
      ],
      'AGO - 0000003': [
        {
          label: 'الوزن',
          value: '24 كيلو',
        },
        {
          label: 'النوع',
          value: 'عادي -جديد',
        },
        {
          label: 'الكمية',
          value: '1',
        },
        {
          label: 'العنوان',
          value: 'المنزل خانيونس - شارع جلال - عمارة الأمل',
        },
        {
          label: 'السعر',
          value: '64 شيكل',
        },
        {
          label: 'التاريخ',
          value: '18 - 3 - 2019',
        },
      ],
      'AGO - 0000004': [
        {
          label: 'الوزن',
          value: '24 كيلو',
        },
        {
          label: 'النوع',
          value: 'عادي -جديد',
        },
        {
          label: 'الكمية',
          value: '1',
        },
        {
          label: 'العنوان',
          value: 'المنزل خانيونس - شارع جلال - عمارة الأمل',
        },
        {
          label: 'السعر',
          value: '64 شيكل',
        },
        {
          label: 'التاريخ',
          value: '18 - 3 - 2019',
        },
      ],
      'AGO - 0000005': [
        {
          label: 'الوزن',
          value: '24 كيلو',
        },
        {
          label: 'النوع',
          value: 'عادي -جديد',
        },
        {
          label: 'الكمية',
          value: '1',
        },
        {
          label: 'العنوان',
          value: 'المنزل خانيونس - شارع جلال - عمارة الأمل',
        },
        {
          label: 'السعر',
          value: '64 شيكل',
        },
        {
          label: 'التاريخ',
          value: '18 - 3 - 2019',
        },
      ],
    },
  }

  render() {
    const { details } = this.state
    return (
      <View
        style={{
          backgroundColor: '#F9FAFC',
          flex: 1,
          width: Dimensions.get('window').width,
        }}
      >
        <ScrollContainer
          contentContainerStyle={{
            marginLeft: 10,
            justifyContent: 'space-around',
          }
          }
        >
          <OrderDetailsBox
            stage={1}
            details={details['AGO - 0000001']}
            orderNumber="AGO - 0000001"
            clientOrder


          />
          <OrderDetailsBox
            stage={2}
            details={details['AGO - 0000002']}
            orderNumber="AGO - 0000002"
            clientOrder
          />
          <OrderDetailsBox
            stage={3}
            details={details['AGO - 0000003']}
            orderNumber="AGO - 0000003"
            clientOrder

          />
          <OrderDetailsBox
            stage={4}
            details={details['AGO - 0000004']}
            orderNumber="AGO - 0000004"
            remains="64"
            clientOrder

          />
          <OrderDetailsBox
            stage={4}
            details={details['AGO - 0000005']}
            orderNumber="AGO - 0000005"
            paid
            clientOrder

          />

        </ScrollContainer>
      </View>
    )
  }
}


export default MyOrders
