import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View, ActivityIndicator, StatusBar, StyleSheet,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
import { navigate } from 'actions/navigationActions'

export class SplashLoading extends Component {
  componentDidMount() {
    this.checkInformation()
  }

  checkInformation=async () => {
    const userToken = await AsyncStorage.getItem('@access_token')
    const firstTime = await AsyncStorage.getItem('@firstTime')
    const { navigation: { navigate },actions:{ checkAuth,updateUserStore } } = this.props
    const checkAuthValue = await checkAuth(userToken)
    if (userToken && checkAuthValue) {
      const user = await AsyncStorage.getItem('@suer')
      await updateUserStore({ user,accessToken:userToken })
      return navigate('HomePage') }
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
        <ActivityIndicator />
        <StatusBar barStyle="default" />
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
  navigate:navigate(dispatch),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  common: state.common,
})

SplashLoading.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashLoading)
