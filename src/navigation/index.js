import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import {
  Splash,
  SplashLoading,
  Login,
  Register,
  ForgotPassword,
  ContactUs,
  MyPurchases,
  MyRequests,
  Conversations,
  HomeStore,
  HomeType,
  Products,
  Workshops,
  MyOffers,
  TermsAndConditions,
  WhoWeAre,
  ProfileSupplier,
  ProfileWorkshop,
  Favorites,
  HomePage,
  HomeStarterPage,
  CustomerService,
  SubServices,
  RequestDetails,
  DetailsOfYourCar,
  Profile,
  ProfileDriver,
  Notifications,
  Payment,
  PaymentInformation,
  ProductOptions,
  Chat,
  NearestServiceCenter,
} from 'containers'

import { BottomTab } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Drawer } from '../components/Drawer'

const SplashStack = createStackNavigator(
  { Splash },
  { navigationOptions: { header: null } }
)

const HomeStack = createStackNavigator({
  HomePage,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),
})
const HomeStoreStack = createStackNavigator({
  HomeStore,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),
})

const TabNavigator = createBottomTabNavigator(
  {
    Purchases: {
      screen: MyPurchases,
      navigationOptions: {
        tabBarLabel: 'Purchases',
        header: null,
      },
    },
    MyRequests: {
      screen: MyRequests,
      navigationOptions: () => ({
        tabBarLabel: 'My request',
      }),
    },
    HomePage: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: 'Home',
        title: 'Home',
        headerMode: 'none',
        header: null,
      }),
    },
    CustomersService: {
      screen: ContactUs,
      navigationOptions: {
        tabBarLabel: 'Customers service',
      },
    },
    Profile: {
      screen: ProfileSupplier,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    tabBarComponent: () => <BottomTab />,
  },
  {
    order: [
      'Purchases',
      'MyRequests',
      'HomePage',
      'CustomersService',
      'Profile',
    ],
    initialRouteName: 'HomePage',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Purchases':
            iconName = 'shopping-cart'
            break
          case 'MyRequests':
            iconName = 'list'
            break
          case 'HomePage':
            iconName = 'home'
            break
          case 'CustomersService':
            iconName = 'headset'
            break
          case 'Profile':
            iconName = 'user-alt'
            break
          default:
            iconName = 'cubes'
            break
        }
        return (
          <FontAwesome5
            type="font-awesome"
            name={iconName}
            size={routeName === 'HomePage' ? 20 : 20}
            color={tintColor}
            style={
              routeName === 'HomePageX'
                ? {
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  paddingTop: 15,
                }
                : undefined
            }
          />
        )
      },
    }),
    tabBarOptions: {
      labelStyle: { fontFamily: 'HelveticaNeueW23forSKY-Reg' },
    },
    lazy: true,
    lazyLoading: true,
    navigationOptions: {
      headerMode: 'none',
      header: null,
    },
  }
)

const Navigator = createStackNavigator(
  {
    SplashLoading,
    Splash: SplashStack,
    TabNavigator,
    Login,
    Register,
    ForgotPassword,
    ContactUs,
    MyPurchases,
    MyRequests,
    Conversations,
    HomeStore: {
      screen: HomeStoreStack,
      navigationOptions: {
        header: null,
      },
    },
    HomeType,
    Products,
    Workshops,
    MyOffers,
    TermsAndConditions,
    WhoWeAre,
    ProfileSupplier,
    ProfileDriver,
    ProfileWorkshop,
    Favorites,
    HomePage: TabNavigator,
    HomeStarterPage,
    CustomerService,
    SubServices,
    RequestDetails,
    DetailsOfYourCar,
    Profile,
    Notifications,
    Payment,
    PaymentInformation,
    ProductOptions,
    Chat,
    NearestServiceCenter,
  },
  {
    initialRouteName: 'SplashLoading',
    navigationOptions: () => ({
      header: null,
    }),
  }
)
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Navigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="home" size={24} style={{ color: tintColor }} />
        ),
        header: null,
      },
    },
    'My requests': {
      screen: MyRequests,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="list" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'Customers service': {
      screen: CustomerService,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="headset" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'My purchases': {
      screen: MyPurchases,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="shopping-cart"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileSupplier,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="user-alt"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    'Who are we': {
      screen: WhoWeAre,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="users" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Conversations: {
      screen: Conversations,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="comment-dots"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    'My offers': {
      screen: MyOffers,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="tags" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="heart" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'Terms and conditions': {
      screen: TermsAndConditions,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="file-signature"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    'Contact us': {
      screen: ContactUs,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="address-book"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    // drawerToggleRoute: 'DrawerToggle',
    // drawerBackgroundColor: 'rgba(255,255,255,1)',
    contentOptions: {
      activeBackgroundColor: 'black',
      activeTintColor: 'red',
    },
    contentComponent: (props) => <Drawer {...props} />,
    navigationOptions: { headerMode: 'none', header: null },
  }
)
export default createAppContainer(MyDrawerNavigator)
