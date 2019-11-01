import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton, LabeledInput, Details, SimpleForm,
} from 'components'
import { TouchableOpacity } from 'react-native'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'


class Login extends Component {
  state={
    email:'mahmoudskek-user@gmail.com',
    password:'123456789',
  }


  handleSubmitLogin= async () => {
    const { actions:{ login } , navigation: { navigate } } = this.props
    const { email,password }  = this.state
    await login({ email,password })
    const { user } = this.props
    if (user)navigate('HomePage')
  }

  handleChange =(field,value) => {
    this.setState({
      [field]:value,
    })
  }

      static navigationOptions = {
        header: null,
      };

      render() {
        const { navigation:{ navigate } } = this.props
        const { email,password } = this.state
        return (
          <SimpleForm
            backgroundOverlay="#00000095"
            backgroundSource={blurredBackground}
            after={(
              <Group
                style={{
                  marginVertical: 30,
                  fontWeight: '9',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigate('ForgotPassword')}
                >
                  <Details text="Forgot password?" />
                </TouchableOpacity>
                <Group
                  style={{
                    flexDirection: 'row',
                    justifyContent:'center',
                  }}
                >

                  <Details
                    text="Don't have an account?"
                    style={{
                      marginHorizontal:10,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => navigate('Register')}
                  >

                    <Details
                      text="Create now"
                      style={{
                        color: '#BE1522',
                        marginHorizontal:0,
                        textDecorationLine: 'underline',
                      }}
                    />
                  </TouchableOpacity>
                </Group>

              </Group>
            )}
          >
            <Group
              style={{
                position: 'relative',
                marginHorizontal: 28,
                borderRadius: 6.7,
                backgroundColor: '#FFFFFF',
              }}
            >
              <Title
                text={[
                  (<Title text="Z" style={{ color: '#BE1522' }} />),
                  (<Title text="AHEB" style={{ color: '#1E1E1E' }} />),
                ]}
              />
              <LabeledInput
                label="Name or email"
                inputStyle={inputStyle}
                labelStyle={inputLabelStyle}
                containerStyle={{ ...inputContainerStyle, marginBottom: 20 }}
                value={email}
                onChangeText={(value) => this.handleChange('email',value)}


              />
              <LabeledInput
                label="Password"
                secureTextEntry
                inputStyle={inputStyle}
                labelStyle={inputLabelStyle}
                containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
                value={password}
                onChangeText={(value) => this.handleChange('password',value)}

              />
              <SplashButton
                title="Sign in"
                onPress={() => this.handleSubmitLogin()}
                style={buttonStyle}
              />
            </Group>
          </SimpleForm>
        )
      }
}

const inputStyle = {
  fontFamily: 'HelveticaNeueW23forSKY-Reg',
  padding: 0,
  margin: 0,
}

const inputLabelStyle = {
  color: '#b0abab',
  marginLeft: 10,
}

const inputContainerStyle = {
  marginHorizontal: 18,
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#FF2334',
    borderRadius: 20,
    marginHorizontal: 50,
  },
  containerStyle: {
    position: 'absolute',
    bottom: -25,
    width: '100%',
    paddingHorizontal: 10,
  },
  titleStyle: {
    color: '#FFFFFF',
    fontWeight: '9',
    fontSize: 18,
    fontFamily: 'HelveticaNeueW23forSKY-Reg',
  },
}


Login.propTypes = {
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions,dispatch,),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  common: state.common,
})

Login.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
