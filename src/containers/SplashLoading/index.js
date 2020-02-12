import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,  StatusBar, StyleSheet,ImageBackground,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Geolocation from '@react-native-community/geolocation'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
import image from 'assets/splashImage.png'
import { firebase } from '@react-native-firebase/messaging'

export class SplashLoading extends Component {
  async componentDidMount() {
    await this.checkInformation()
  }

  checkInformation=async () => {
    const userToken = await AsyncStorage.getItem('@access_token')
    const firstTime = await AsyncStorage.getItem('@firstTime')
    const {
      navigation: { navigate },actions:{
        checkAuth,updateUserStore ,sendDriverLocation,updateUserFcm,
      },
    } = this.props
    const checkAuthValue = await checkAuth(userToken)
    if (userToken && checkAuthValue ) {
      const user = await AsyncStorage.getItem('@user')
      const userParsed = JSON.parse(user).user
      if (!userParsed) {
        await   AsyncStorage.removeItem('@access_token','@user')
      }
      await updateUserStore({ user:JSON.parse(user).user,accessToken:userToken })
      const fcmToken = await firebase.messaging().getToken()
      if (fcmToken) {
        await updateUserFcm(fcmToken)
        const enabled = await firebase.messaging().hasPermission()
        if (!enabled) {
          await firebase.messaging().requestPermission()
        }
      }
      if (userParsed.type === '3')     {
        setTimeout(async () => {
          Geolocation.getCurrentPosition((result) => {
            const { coords:{ latitude,longitude } } = result
            sendDriverLocation({ latitude,longitude }).then(() => {

            })
          },(error) => {      }, { enableHighAccuracy:true })
        },180000)
        return navigate('HomeDriverPage')
      }
      return navigate('HomePageDrawer')
    }
    if (firstTime) return navigate('Login')
    await AsyncStorage.setItem('@firstTime','true')
    return navigate('Splash')
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <ImageBackground
          source={image}
          style={{
            flex:1,width:'120%',height:'120%' ,alignSelf:'center',
          }}
        >
          <ImageBackground
            source={image}
            style={{
              flex:1,width:'100%',height:'100%' ,alignSelf:'center',
            }}
          />
        </ImageBackground>
      </View>
    )
  }
}

SplashLoading.propTypes = {
  navigation: PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions,dispatch),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  generalData:state.generalData,
})

SplashLoading.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashLoading)
