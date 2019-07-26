import React from 'react'
import {
  createBottomTabNavigator, createAppContainer, createStackNavigator, createMaterialTopTabNavigator,
} from 'react-navigation'
import {
  MyInformation, MyPayments, OrderTube, MyOrders, Splash, SplashLoading,
  Login, Register, CurrentOrders, PreviousOrders, OrdersNotPaid, CurrentOrderDetails, ForgotPassword,
  ContactUs, MyPurchases, MyRequests, Conversations, HomeStore,
} from 'containers'

import { Header } from 'components'
import { Icon } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const OrderTubeStack = createStackNavigator({
  OrderTube,
})
const SplashStack = createStackNavigator({
  Splash,
}, {
  navigationOptions: {
    header: null,
  },
})
const MyOrdersStack = createStackNavigator({
  MyOrders,
})
const CurrentOrdersStack = createStackNavigator({
  CurrentOrders,
  CurrentOrderDetails,
})
const PreviousOrdersStack = createStackNavigator({
  PreviousOrders,
})
const OrdersNotPaidStack = createStackNavigator({
  OrdersNotPaid,
})

const MyAccountStack = createMaterialTopTabNavigator({
  MyInformation,
  MyPayments,
})
const TabCustomerNavigator = createBottomTabNavigator(
  {
    MyOrders: {
      screen: MyOrdersStack,
      navigationOptions: {
        tabBarLabel: 'طلباتي',
        header: null,
      },
    },
    MyAccount: {
      screen: MyAccountStack,
      navigationOptions: () => ({
        tabBarLabel: 'حسابي',
        header: props => <Header {...props} />,
      }),
    },
    OrderTube: {
      screen: OrderTubeStack,
      navigationOptions: {
        tabBarLabel: 'اطلب اسطوانة',

      },
    },
  },
  {
    order: ['MyOrders', 'OrderTube', 'MyAccount'],
    initialRouteName: 'OrderTube',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        const IconComponent = Icon
        let iconName
        switch (routeName) {
          case 'MyAccount':
            iconName = 'user'
            break
          case 'OrderTube':
            iconName = 'plus-square'
            break
          case 'MyOrders':
            iconName = 'cubes'
            break
          default:
            iconName = 'cubes'
            break
        }
        return (
          <IconComponent
            type="font-awesome"
            name={iconName}
            size={25}
            color={tintColor}
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: { fontFamily: 'HelveticaNeueW23forSKY-Reg' },
    },
    lazy: true,
    lazyLoading: true,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      if (routeName === 'MyAccount') { return { header: props => <Header {...props} /> } }

      return {
        header: null,
      }
    },
    headerMode: 'screen',
  }
)
const TabWorkerNavigator = createBottomTabNavigator(
  {
    CurrentOrders: {
      screen: CurrentOrdersStack,
      navigationOptions: {
        tabBarLabel: 'الطلبات الحالية',
      },
    },
    PreviousOrders: {
      screen: PreviousOrdersStack,
      navigationOptions: () => ({
        tabBarLabel: 'طلبات سابقة',
      }),
    },
    OrdersNotPaid: {
      screen: OrdersNotPaidStack,
      navigationOptions: {
        tabBarLabel: 'طلبات تحتاج الى تحصيل',
      },
    },
  },
  {
    order: ['CurrentOrders', 'PreviousOrders', 'OrdersNotPaid'],
    initialRouteName: 'PreviousOrders',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'OrdersNotPaid':
            iconName = 'file-invoice-dollar'
            break
          case 'PreviousOrders':
            iconName = 'receipt'
            break
          case 'CurrentOrders':
            iconName = 'cubes'
            break
          default:
            iconName = 'cubes'
            break
        }
        return (
          <FontAwesome5
            type="font-awesome"
            name={iconName}
            size={20}
            color={tintColor}
          />
        )
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: { fontFamily: 'HelveticaNeueW23forSKY-Reg' },
    },
    lazy: true,
    lazyLoading: true,
    navigationOptions: {
      header: null,
    },
  }
)

const MyAccountNavigator = createStackNavigator({
  SplashLoading,
  Splash: SplashStack,
  TabCustomerNavigator,
  TabWorkerNavigator,
  Login,
  Register,
  MyAccount: MyAccountStack,
  Header,
  ForgotPassword,
  ContactUs,
  MyPurchases,
  MyRequests,
  Conversations,
  HomeStore,
},
{
  initialRouteName: 'HomeStore',
  headerMode: 'screen',
  navigationOptions: {
    header: null,
  },
})

export default createAppContainer(MyAccountNavigator)
