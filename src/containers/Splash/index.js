import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Logo, Details, Group, SplashButton,
} from 'components'
import LinearGradient from 'react-native-linear-gradient'
import logo from 'assets/logo.png'

class Splash extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 40,
          paddingHorizontal: 40,
        }}
        colors={['#ff0000', '#0092c9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.3 }}
      >
        <Group
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo
            source={logo}
            style={{
              marginBottom: 28,
            }}
          />
          <Details
            text="إطلب اسطوانة غاز بطريقة ذكية وحديثة
        فنحن نواكب العصر ونتطور كل يوم من أجلكم ومن أجل راحتكم"
          />
        </Group>
        <Group
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 40,
            width: '100%',
          }}
        >
          <SplashButton
            title="تسجيل الدخول"
            onPress={() => navigate('Login')}
            style={{
              buttonStyle: {
                backgroundColor: '#ffffff',
                padding: 15,
                alignItems: 'center',
              },
              titleStyle: {
                color: '#0083b5',
                fontFamily: 'HelveticaNeueW23forSKY-Reg',
                alignItems: 'center',
              },
            }}
          />

          <SplashButton
            title="تسجيل حساب جديد"
            onPress={() => navigate('Register')}
            type="clear"
            style={{
              titleStyle: {
                color: '#ffffff',
                fontFamily: 'HelveticaNeueW23forSKY-Reg',
              },
            }}
          />

        </Group>

      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  inputStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 5,

  },
})

export default Splash
