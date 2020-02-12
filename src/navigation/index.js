import React from 'react'
import {
  Image,View,Dimensions,I18nManager,
} from 'react-native'
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
  PaymentInformationMap,
  OrderAvailableDetails,
  DriverMap,
  MyOrderDetails,
  ContactUsOut,
  UpdatePassword,
  ConfirmCode,
} from 'containers'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import I18n from '../utilites/i18n'
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
const ProfileDriverStack = createStackNavigator({
  ProfileDriver,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const PaymentInformationMapStack = createStackNavigator({
  PaymentInformationMap,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const OrderAvailableDetailsStack = createStackNavigator({
  OrderAvailableDetails,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const DriverMapStack = createStackNavigator({
  DriverMap,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const MyOrderDetailsStack = createStackNavigator({
  MyOrderDetails,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ContactUsOutStack = createStackNavigator({
  ContactUsOut,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const UpdatePasswordStack = createStackNavigator({
  UpdatePassword,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})
const ConfirmCodeStack = createStackNavigator({
  ConfirmCode,
  navigationOptions: () => ({ header: null, headerMode: 'none' }),

})

const TabNavigator = createBottomTabNavigator(
  {
    Purchases: {
      screen: MyPurchasesStack,
      navigationOptions: {
        tabBarLabel: I18n.t('purchases'),
        header: null,
      },
    },
    MyRequests: {
      screen: MyRequestsStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t('my_requests'),
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
        tabBarLabel: I18n.t('customers_service'),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: I18n.t('profile'),
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
const TabDriverNavigator = createBottomTabNavigator(
  {
    MyRequests: {
      screen: MyRequestsStack,
      navigationOptions: () => ({
        tabBarLabel:I18n.t('my_requests') ,
        header:null,
      }),
    },
    CustomersService: {
      screen: CustomerServiceStack,
      navigationOptions: {
        tabBarLabel: I18n.t('customers_service'),
      },
    },
    Profile: {
      screen: ProfileDriverStack,
      navigationOptions: {
        tabBarLabel: I18n.t('profile'),
      },
    },

  },
  {
    order: [
      'MyRequests',
      'CustomersService',
      'Profile',
    ],
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => ({


      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        let iconName
        switch (routeName) {
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
          <FontAwesome5
            type="font-awesome"
            name={iconName}
            size={20}
            color="#ffff"

          />

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
    PaymentInformationMap:PaymentInformationMapStack,
  },
  {
    initialRouteName: 'HomePage',
    header:null,
    headerMode:'none',


  }
)
const DriverNavigator = createStackNavigator(
  {
    ContactUs:ContactUsStack,
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
    ProfileDriver:TabDriverNavigator,
    ProfileWorkshop:ProfileWorkshopStack,
    Favorites:FavoritesStack,
    HomeStarterPage,
    CustomerService:CustomerServiceStack,
    SubServices:SubServicesStack,
    RequestDetails:RequestDetailsStack,
    DetailsOfYourCar:DetailsOfYourCarStack,
    Notifications:NotificationsStack,
    Payment:PaymentCreditStack,
    PaymentInformation:PaymentInformationStack,
    ProductOptions:ProductOptionsStack,
    Chat,
    NearestServiceCenter:NearestServiceCenterStack,
    OfferDetails:OfferDetailsStack,
    PurchaseDetails:PurchaseDetailsStack,
    SupportTicketChat:SupportTicketChatStack,
    OrderAvailableDetails:OrderAvailableDetailsStack,
    DriverMap:DriverMapStack,
    MyOrderDetails:MyOrderDetailsStack,

  },
  {
    initialRouteName: 'ProfileDriver',
    header:null,
    headerMode:'none',


  }
)
const MyDrawerNavigator = createDrawerNavigator(
  {
    [I18n.t('home')]: {
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
    [I18n.t('my_requests')]: {
      screen: MyRequestsStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="list" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('customers_service')]: {
      screen: CustomerServiceStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="headset" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('my_purchases')]: {
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
    [I18n.t('profile')]: {
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
    [I18n.t('who_are_we')]: {
      screen: WhoWeAreStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="users" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('conversations')]: {
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
    [I18n.t('support_tickets')]: {
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
    [I18n.t('offers')]: {
      screen:OffersStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="tags" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('my_offers')]: {
      screen:MyOffersStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="tags" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('favorites')]: {
      screen: FavoritesStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="heart" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    [I18n.t('terms_and_conditions')]: {
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
    [I18n.t('contact_us')]: {
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
    initialRouteName: I18n.t('home'),
    drawerPosition: I18nManager.isRTL ? 'right' : 'left',
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
const MyDrawerDriverNavigator = createDrawerNavigator(
  {
    'Customers service': {
      screen: CustomerServiceStack,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <FontAwesome5 name="headset" size={24} style={{ color: tintColor }} />
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
    'My Orders Available': {
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
      screen: DriverNavigator,
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
    initialRouteName: 'Profile',
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
  HomePageDrawer:MyDrawerNavigator,
  HomeDriverPage:MyDrawerDriverNavigator,
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
  ConfirmCode:ConfirmCodeStack,
  ContactUsOut:ContactUsOutStack,
  UpdatePassword:UpdatePasswordStack,
},  {
  initialRouteName: 'SplashLoading',
  header:null,
  headerMode:'none',


})
export default createAppContainer(rootStack)
