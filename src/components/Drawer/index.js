import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { ProfileAvatar ,Group } from 'components'
import AsyncStorage from '@react-native-community/async-storage'
import { Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { StackActions } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const userItems = ['Home','My requests','Customers service',
  'My purchases','Profile','Who are we',
  'Conversations','Support Tickets','Offers',
  'My offers','Favorites','Terms and conditions','Contact us']
const driverItems = ['Home','Profile','Customers service',
  'My Order','My Order Available','Who are we','Chat',
  'Terms and conditions','Contact us']

export class Drawer extends Component {
  handleSignOut=async () => {
    const { navigation:{ navigate } } = this.props
    await AsyncStorage.removeItem('@user')
    await AsyncStorage.removeItem('@access_token')
    navigate('Login')
  }

  handleHomePressed() {
    const { navigation:{ dispatch  } } = this.props
    const pushAction = StackActions.push({
      routeName: 'HomePage',

    })

    dispatch(pushAction)
  }


  render() {
    const { userData:{ user:{ image,name,type } },items } = this.props

    const newItems = items.filter((item) => {
      if (Number(type) === 3) return  driverItems.includes(item.key)
      else return userItems.includes(item.key)
    })

    return (
      <ScrollView style={{ filter: 'blur(5)' }}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <ProfileAvatar
            size="large"
            source={{ uri:image }}
            style={{
              containerStyle: {
                marginBottom: 0,
                marginTop: 10,
                marginLeft: 20,
              },
              avatarStyle: {
                margin: 0,
                padding: 0,
              },
            }}
            rounded
            title={name}
            activeOpacity={0.7}
          />
          <Text
            style={{
              marginLeft: 20,

            }}
          >
            {name}
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />


          <DrawerNavigatorItems
            {...this.props}
            onItemPress={(router) => {
              const { onItemPress,activeItemKey } = this.props
              activeItemKey === 'Home' ? this.handleHomePressed() : null
              return onItemPress(router)
            }}
            items={newItems}
          />
          <Divider style={{ backgroundColor: 'black' }} />
          <Group
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex:1,
            }}
          >

            <FontAwesome5
              name="sign-out-alt"
              size={15}
              onPress={() => this.handleSignOut()}
              solid
              style={{
                marginRight: 2,
                color: 'black',

              }}
            />
            <Text
              style={{
                alignSelf:'center',
                fontSize:15,
                fontWeight:'900',

              }}
              onPress={() => this.handleSignOut()}
            >
Sign out

            </Text>
          </Group>
        </SafeAreaView>
      </ScrollView>
    ) }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

Drawer.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer)
