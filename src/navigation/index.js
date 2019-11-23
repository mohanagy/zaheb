import React from 'react'
import { Image,View,Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import logo from 'assets/marinLogo.png'
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
  MaintenancePage,
  HomeType,
  Products,
  Workshops,
  MyOffers,
  Offers,
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
  OfferDetails,
  PurchaseDetails,
  SupportTickets,
  MyOrders,
  MyOrderAvailable,
  SupportTicketChat,
} from 'containers'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Drawer from '../components/Drawer'
const screen = Dimensions.get('screen')
const SplashStack = createStackNavigator(
  { Splash },
  { navigationOptions: { header: null } }
)

const HomeStack = createStackNavigator({
  HomePage,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),
})
const MyOrdersStack = createStackNavigator({
  MyOrders,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),
})
const MyOrderAvailableStack = createStackNavigator({
  MyOrderAvailable,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),
})
const HomeStoreStack = createStackNavigator({
  HomeStore,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const MaintenancePageStack = createStackNavigator({
  MaintenancePage,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const MyRequestsStack = createStackNavigator({
  MyRequests,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const CustomerServiceStack = createStackNavigator({
  CustomerService,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const MyPurchasesStack = createStackNavigator({
  MyPurchases,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const WhoWeAreStack = createStackNavigator({
  WhoWeAre,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ConversationsStack = createStackNavigator({
  Conversations,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const SupportTicketsStack = createStackNavigator({
  SupportTickets,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const MyOffersStack = createStackNavigator({
  MyOffers,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const OffersStack = createStackNavigator({
  Offers,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const FavoritesStack = createStackNavigator({
  Favorites,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const TermsAndConditionsStack = createStackNavigator({
  TermsAndConditions,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ContactUsStack = createStackNavigator({
  ContactUs,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ProfileStack = createStackNavigator({
  Profile,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const SubServicesStack = createStackNavigator({
  SubServices,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const HomeTypeStack = createStackNavigator({
  HomeType,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const WorkshopsStack = createStackNavigator({
  Workshops,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const NearestServiceCenterStack = createStackNavigator({
  NearestServiceCenter,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const RequestDetailsStack = createStackNavigator({
  RequestDetails,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const PaymentCreditStack = createStackNavigator({
  Payment,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const NotificationsStack = createStackNavigator({
  Notifications,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const DetailsOfYourCarStack = createStackNavigator({
  DetailsOfYourCar,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ProductsStack = createStackNavigator({
  Products,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ProductOptionsStack = createStackNavigator({
  ProductOptions,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const PaymentInformationStack = createStackNavigator({
  PaymentInformation,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ProfileWorkshopStack = createStackNavigator({
  ProfileWorkshop,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const OfferDetailsStack = createStackNavigator({
  OfferDetails,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const PurchaseDetailsStack = createStackNavigator({
  PurchaseDetails,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const SupportTicketChatStack = createStackNavigator({
  SupportTicketChat,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})

const TabNavigator = createBottomTabNavigator(
  {
    Purchases: {
      screen: MyPurchasesStack,
      navigationOptions: {
        tabBarLabel: 'Purchases',
        header: null,
      },
    },
    MyRequests: {
      screen: MyRequestsStack,
      navigationOptions: () => ({
        tabBarLabel: 'My request',
        header:null,
      }),
    },
    HomePage: {
      screen: HomeStack,
      navigationOptions: () => ({
        title: ' ',
        headerMode: 'none',
      }),

    },
    CustomersService: {
      screen: CustomerServiceStack,
      navigationOptions: {
        tabBarLabel: 'Customers service',
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },

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

          routeName === 'HomePage'
            ? (
              <View
                style={{
                  overflow: 'hidden',
                  position:'absolute',
                  borderRadius:40,
                  zIndex:9999,
                  justifyContent: 'center',
                  alignContent:'center',
                  alignItems:'center',
                  width:'90%',
                  height:screen > 600 ? '250%' : '200%',

                }}
              >

                <Image
                  source={logo}
                  style={{
                    width:'100%',
                    height:'100%',
                    resizeMode: 'contain' ,
                    backgroundColor:'white',
                    alignSelf:'center',
                    padding:20,
                    // overflow:'hidden',
                  }}
                />
              </View>
            )
            : (
              <FontAwesome5
                type="font-awesome"
                name={iconName}
                size={20}
                color="#ffff"

              />
            )
        )
      },
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'HelveticaNeueW23forSKY-Reg',
          zIndex:-10,
          inactiveTintColor: 'cyan',
          activeBackgroundColor:'lightgreen',


        },
        style:{
          backgroundColor:'#1E1E1E',

        },
      },
    }),
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
    ContactUs:ContactUsStack,
    MyPurchases:MyPurchasesStack,
    MyRequests:MyRequestsStack,
    Conversations:ConversationsStack,
    SupportTickets:SupportTicketsStack,
    HomeStore:HomeStoreStack,
    MaintenancePage:MaintenancePageStack,
    HomeType:HomeTypeStack,
    Products:ProductsStack,
    Workshops:WorkshopsStack,
    MyOffers:MyOffersStack,
    Offers:OffersStack,
    TermsAndConditions:TermsAndConditionsStack,
    WhoWeAre:WhoWeAreStack,
    ProfileSupplier,
    ProfileDriver,
    ProfileWorkshop:ProfileWorkshopStack,
    Favorites:FavoritesStack,
    HomePage: TabNavigator,
    HomeStarterPage,
    CustomerService:CustomerServiceStack,
    SubServices:SubServicesStack,
    RequestDetails:RequestDetailsStack,
    DetailsOfYourCar:DetailsOfYourCarStack,
    Profile:ProfileStack,
    Notifications:NotificationsStack,
    Payment:PaymentCreditStack,
    PaymentInformation:PaymentInformationStack,
    ProductOptions:ProductOptionsStack,
    Chat,
    NearestServiceCenter:NearestServiceCenterStack,
    OfferDetails:OfferDetailsStack,
    PurchaseDetails:PurchaseDetailsStack,
    SupportTicketChat:SupportTicketChatStack,
  },
  {
    initialRouteName: 'HomePage',
    header:null,
    headerMode:'none',


  }
)
const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Navigator,
      navigationOptions:({ navigation }) => ({

        drawerIcon: ({ tintColor }) => (
          <FontAwesome5
            name="home"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
    'My requests': {
      screen: MyRequestsStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="list" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'Customers service': {
      screen: CustomerServiceStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="headset" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'My purchases': {
      screen: MyPurchasesStack,
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
    'My Order': {
      screen: MyOrdersStack,
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
    'My Order Available': {
      screen: MyOrderAvailableStack,
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
      screen: ProfileStack,
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
      screen: WhoWeAreStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="users" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Conversations: {
      screen: ConversationsStack,
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
    'Support Tickets': {
      screen: SupportTicketsStack,
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
    'Offers': {
      screen:OffersStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="tags" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'My offers': {
      screen:MyOffersStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="tags" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="heart" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    'Terms and conditions': {
      screen: TermsAndConditionsStack,
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
      screen: ContactUsStack,
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

  }
)
const rootStack = createStackNavigator({
  MyDrawerNavigator,
  SplashLoading,
  Splash: SplashStack,
  Login:{
    navigationOptions:{
      drawerLockMode: 'locked-closed',
    },
    screen:Login,

  },
  Register,
  ForgotPassword,
},  {
  initialRouteName: 'SplashLoading',
  header:null,
  headerMode:'none',


})
export default createAppContainer(rootStack)
