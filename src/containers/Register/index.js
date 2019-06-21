import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {
  Logo, Title, Group, SplashButton,
  InputField, ScrollContainer, TextArea,
  Maps,
} from 'components'
import LinearGradient from 'react-native-linear-gradient'
import logo from 'assets/logo.png'

class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate } } = this.props
    return (
      <LinearGradient
        style={styles.container}
        colors={['#ff0000', '#0092c9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.3 }}
      >
        <ScrollContainer
          contentContainerStyle={{

          }}
        >
          <Group
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginVertical: 30,
            }}
          >
            <Logo
              source={logo}
              style={{}}
            />
            <Title
              text="تسجيل حساب جديد"
            />
          </Group>
          <Group
            style={{
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingHorizontal: 20,
              width: '100%',
              height: '100%',
            }}
          >
            <InputField
              placeHolder="الاسم"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    paddingLeft: 6,
                    marginBottom: 10,

                  },
                }}
            />
            <InputField
              placeHolder="رقم الجوال"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    paddingLeft: 6,
                    marginBottom: 10,

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
                    marginBottom: 10,
                  },
                }}
            />
            <InputField
              placeHolder="تاكيد كلمة المرور"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    borderRadius: 5,
                    paddingLeft: 6,
                    marginBottom: 10,
                  },
                }}
            />
            <InputField
              placeHolder="إسم العنوان, مثال: 'المنزل'"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    borderRadius: 5,
                    paddingLeft: 6,
                    marginBottom: 10,
                  },
                }}
            />
            <TextArea

              placeHolder="كتابة العنوان بالتفصيل"
              style={
                {
                  inputStyle: {
                    backgroundColor: '#ffffff',
                    fontFamily: 'HelveticaNeueW23forSKY-Reg',
                    borderRadius: 5,
                    paddingLeft: 6,
                    marginBottom: 10,
                  },
                }}
            />
            <Maps
              style={
                {
                  container: {
                    height: '20%',
                    width: '95%',
                    paddingVertical: 150,
                    marginBottom: 10,
                    borderRadius: 10,
                  },
                  map: {
                    ...StyleSheet.absoluteFillObject,
                  },
                }
              }
            />
            <SplashButton
              title="تسجيل حساب جديد"
              onPress={() => navigate('PreviousOrders')}
              style={{
                buttonStyle: {
                  backgroundColor: '#ffffff',
                  marginBottom: 10,
                  paddingVertical: 15,
                },
                containerStyle: {
                  width: '100%',
                  paddingHorizontal: 10,
                },
                titleStyle: {
                  color: '#0083b5',
                  fontFamily: 'HelveticaNeueW23forSKY-Reg',
                  alignItems: 'center',
                },
              }}
            />

            <SplashButton
              title="تسجيل الدخول"
              type="clear"
              onPress={() => navigate('Login')}
              style={{
                titleStyle: {
                  color: '#ffffff',
                  fontFamily: 'HelveticaNeueW23forSKY-Reg',
                },
                containerStyle: {
                  marginVertical: 30,
                },
              }}
            />

          </Group>

        </ScrollContainer>
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 5,

  },
})

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Register
