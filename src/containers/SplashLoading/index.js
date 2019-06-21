import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View, ActivityIndicator, AsyncStorage, StatusBar, StyleSheet,
} from 'react-native'

export class SplashLoading extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.checkInformation()
  }

  checkInformation=async () => {
    const userToken = await AsyncStorage.getItem('token')
    const { navigation: { navigate } } = this.props
    if (userToken) return navigate('Home')

    return navigate('Splash')
  }

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

export default SplashLoading
