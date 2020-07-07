import React, { Component } from 'react'

import PropTypes from 'prop-types'
import {
  Group, SplashButton, LabeledInput, Details, SimpleForm,
} from 'components'
import { Dimensions, TouchableOpacity, Image } from 'react-native'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
import logo from 'assets/marinLogo.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Geolocation from '@react-native-community/geolocation'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class Login extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed',
  }

  state={
    email:'mahmoudskek-user@gmail.com',
    password:'123456789',
  }


  handleSubmitLogin= async () => {
    const { actions:{ login } , navigation: { navigate } } = this.props
    const { email,password }  = this.state
    const user = await login({ email,password })
    const {
      actions:{
        sendDriverLocation,
      },
    } = this.props
    if (user) {
      if (user.type === '3') {
        if (!global.driverLocation)
        {
          global.driverLocation =   setInterval(async () => {
            await Geolocation.getCurrentPosition(async(result) => {
              const { coords:{ latitude,longitude } } = result
              await sendDriverLocation({ latitude,longitude })
            },(error) => {

            }, { enableHighAccuracy:false })
          },40000)}
        return navigate('HomeDriverPage')}
      else    navigate('HomePageDrawer')
    }
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
        const { navigation:{ navigate },userData:{ isFetching } } = this.props
        const { email,password } = this.state
        return (
          <SimpleForm
            backgroundOverlay="#00000095"
            backgroundSource={blurredBackground}
          >
            <Group
              style={{
                justifyContent: 'center',
                height:'35%',
                width:'100%',
                alignItems:'center',
                alignSelf:'center',
              }}
            >

              <Group
                style={{
                  justifyContent:'center',
                  backgroundColor: '#FFF',
                  borderTopLeftRadius: 9 ** 10,
                  borderTopRightRadius: 9 ** 10,
                  paddingTop: 10,
                  zIndex: 99999,
                  marginBottom:'-10%',
                }}
              >
                <Image
                  source={logo}
                  style={{
                    maxWidth:100,
                    maxHeight:50,
                    paddingHorizontal:'20%',
                    resizeMode:'contain',
                  }}
                />
              </Group>
              <Group
                style={{
                  borderRadius: 6.7,
                  backgroundColor: '#fff',
                  justifyContent: 'flex-end',
                  width:'80%',
                  marginTop:'4%',
                  // flex:1,
                }}
              >
                <Group
                  style={{
                    marginBottom:20,
                  }}
                >

                  <LabeledInput
                    label={I18n.t('name_or_email')}
                    inputStyle={inputStyle}
                    labelStyle={inputLabelStyle}
                    inputContainerStyle={{ ...inputContainerStyle }}
                    containerStyle={containerStyle}
                    value={email}
                    onChangeText={(value) => this.handleChange('email',value)}
                    rightIcon={(
                      <FontAwesome5
                        size={10}
                        solid
                        name="user"
                        style={{
                          margin:0,
                          padding:0,
                        }}
                      />
                    )}
                  />
                  <LabeledInput
                    label={I18n.t('password')}
                    secureTextEntry
                    inputStyle={inputStyle}
                    containerStyle={{ ...containerStyle }}
                    labelStyle={{ ...inputLabelStyle }}
                    style={{
                    }}
                    autoCapitalize="none"
                    inputContainerStyle={{ ...inputContainerStyle }}
                    value={password}
                    onChangeText={(value) => this.handleChange('password',value)}
                    onPressOnRightIcon={()=>this.setState()}
                    rightIcon={(
                      <FontAwesome5
                        size={10}
                        name="lock"
                        style={{
                          margin:0,
                          padding:0,
                        }}
                      />
                    )}
                  />
                </Group>
                <Group
                  style={{
                    maxHeight:'30%',
                    width:'70%',
                    alignItems:'center',
                    alignSelf:'center',
                    justifyContent:'center',

                  }}
                >

                  <SplashButton
                    title={I18n.t('sign_in')}
                    onPress={() => this.handleSubmitLogin()}
                    style={buttonStyle}
                    loading={isFetching}
                  />
                </Group>
              </Group>
            </Group>
            <Group
              style={{
                marginTop:10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigate('ForgotPassword')}
              >
                <Details
                  text={`${I18n.t('forgot_password')}`}
                  style={{
                    fontSize:12,
                  }}
                />
              </TouchableOpacity>
              <Group
                style={{
                  flexDirection: 'row',
                  justifyContent:'center',
                }}
              >

                <Details
                  text={`${I18n.t('dont_have_an_account')}`}
                  style={{
                    marginHorizontal:'2%',
                    fontSize:12,

                  }}
                />
                <TouchableOpacity
                  onPress={() => navigate('Register')}
                >

                  <Details
                    text={I18n.t('create_now')}
                    style={{
                      color: '#BE1522',
                      marginHorizontal:0,
                      fontSize:12,
                      textDecorationLine: 'underline',
                    }}
                  />
                </TouchableOpacity>
              </Group>
              <Group
                style={{
                  justifyContent: 'center',
                  alignContent:'center',
                  alignItems:'center',
                  marginTop:10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigate('ContactUsOut')}
                >
                  <FontAwesome5
                    size={30}
                    solid
                    name="envelope-open"
                    style={{
                      margin:0,
                      padding:0,
                      color:'white',
                    }}
                  />
                </TouchableOpacity>
              </Group>

            </Group>
          </SimpleForm>
        )
      }
}

const inputStyle = {
  fontFamily: 'HelveticaNeueW23forSKY-Reg',
  padding: 0,
  fontSize:10,
  borderBottomWidth: 0,


}

const inputLabelStyle = {
  color: '#b0abab',
  fontSize:10,
  fontWeight:'600',

}

const inputContainerStyle = {
  height:20,


}
const containerStyle = {
  marginHorizontal: 18,

}
const buttonStyle = {
  buttonStyle: {
    height:'90%',
    backgroundColor: '#FF2334',
    borderRadius: 50,
    alignSelf:'center',
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',

  },
  containerStyle: {
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    alignContent:'center',
    width:'100%',


  },
  titleStyle: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf:'center',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize:12,
    justifyContent: 'center',

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
  userData:state.userData,
  generalData: state.generalData,
})

Login.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
