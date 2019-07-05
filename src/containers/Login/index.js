import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import {
  Logo, Title, Group, SplashButton, InputField, ScrollContainer, BackgroundImageWrapper,
} from 'components'
import LinearGradient from 'react-native-linear-gradient'
import logo from 'assets/logo.png'
import blurredBackground from 'assets/blurred-background.png'

const screen = Dimensions.get('screen')

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <BackgroundImageWrapper source={blurredBackground} style={{ height: '100%' }}>
        <ScrollContainer
          contentContainerStyle={{
            marginBottom: 0,
            paddingBottom: 0,
            justifyContent: 'flex-start',
          }}
        >
          <Group
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 30,
              flex: 1,
            }}
          >
            <Logo
              source={logo}
              style={{
                borderTopLeftRadius: 99999,
                borderTopRightRadius: 99999,
                backgroundColor: '#FFFFFF',
                width: screen.width * 0.5,
              }}
              containerStyle={{
              }}
            />
            <Title
              text="تسجيل الدخول"
            />
          </Group>
          <Group
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 90,
              height: '40%',
              paddingHorizontal: 20,
              width: '100%',
            }}
          >
            <InputField
              placeHolder="رقم الجوال"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    paddingLeft: 6,

                  },
                }}
            />
            <InputField
              placeHolder="كلمة المرور"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    borderRadius: 5,
                    paddingLeft: 6,
                  },
                }}
            />
            <SplashButton
              title="تسجيل الدخول"
              onPress={() => navigate('PreviousOrders')}
              style={{
                buttonStyle: {
                  backgroundColor: '#ffffff',
                },
                containerStyle: {
                  width: '100%',
                  paddingHorizontal: 10,
                },
                titleStyle: {
                  color: '#0083b5',
                  fontFamily: 'HelveticaNeueW23forSKY-Reg',
                },
              }}
            />

            <SplashButton
              title="تسجيل حساب جديد"
              type="clear"
              onPress={() => navigate('Register')}
              style={{
                titleStyle: {
                  color: '#ffffff',
                  fontFamily: 'HelveticaNeueW23forSKY-Reg',
                },
              }}
            />

          </Group>
        </ScrollContainer>
      </BackgroundImageWrapper>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  inputStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 5,

  },
})


Login.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Login
