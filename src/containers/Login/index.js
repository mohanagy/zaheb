import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton, LabeledInput, Details, SimpleForm,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'


class Login extends Component {
  state={
    loginData:{
      email:'mahmoudskek-user@gmail.com',
      password:'123456789',
    },
  }


  handleSubmitLogin= async () => {
    const { actions:{ login } , navigation: { navigate } } = this.props
    const { loginData } = this.state
    await login(loginData)
    const { user } = this.props
    if (user)navigate('HomePage')
  }

      static navigationOptions = {
        header: null,
      };

      render() {
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
                <Details text="Forgot password?" />
                <Details
                  text={(
                    <>
                  Don't have an account?
                      <Details
                        text="Create now"
                        style={{
                          color: '#BE1522',
                          textDecorationLine: 'underline',
                        }}
                      />
                    </>
                  )}
                >
                </Details>
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
              />
              <LabeledInput
                label="Password"
                inputStyle={inputStyle}
                labelStyle={inputLabelStyle}
                containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
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
