import React, { Component } from 'react'
import { TouchableOpacity, Dimensions,Image } from 'react-native'
import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton,
  SimpleForm, LabeledInput,
  Details,ScrollContainer,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'

import logo from 'assets/marinLogo.png'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class Register extends Component {
  state={
    name:null,
    email:null,
    phone:null,
    password:null,
    location:null,
    username:null,
  }

  handleChange =(field,value) => {
    this.setState({
      [field]:value,
    })
  }

  handleSubmit =async () => {
    const { actions:{ register },navigation:{ navigate } } = this.props
    const {
      phone,email,name,password,location,username,
    } = this.state
    const check =  await register({
      phone,email,name,password,location,username,
    })
    if (check) navigate('Login')
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate },userData:{ isFetching } } = this.props
    const {
      name,email,phone,password,location,username,
    } = this.state
    return (


      <SimpleForm
        backgroundSource={blurredBackground}
        backgroundOverlay="#00000095"
        after={(
          <Group
            style={{
              marginVertical: 30,
              fontWeight: '100',
              justifyContent: 'center',
            }}
          >
            <Group
              style={{
                flexDirection: 'row',
                justifyContent:'center',
              }}
            >

              <Details
                text={I18n.t('already_have_an_account')}
                style={{
                  marginHorizontal:5,
                }}
              />
              <TouchableOpacity
                onPress={() => navigate('Login')}
              >
                <Details
                  text={I18n.t('sign_in')}
                  style={{
                    color: '#BE1522',
                    textDecorationLine: 'underline',
                    marginHorizontal:5,
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
          <Group
            style={{
              position: 'absolute',
              top: -70,
              left: (screen.width * 0.5) - 28 - 70,
              backgroundColor: '#FFF',
              borderTopLeftRadius: 9 ** 9,
              borderTopRightRadius: 9 ** 9,
              paddingHorizontal: 10,
              width: 140,
              height: 100,
              justifyContent: 'center',
            }}
          >
            <Image source={logo} style={{ width: 100, height: 100,resizeMode:'contain' }} />
          </Group>
          <LabeledInput
            isRequired
            label={I18n.t('full_name')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={name}
            onChangeText={(value) => this.handleChange('name',value)}
          />
          <LabeledInput
            isRequired
            label={I18n.t('user_name')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={username}
            onChangeText={(value) => this.handleChange('username',value)}
          />
          <LabeledInput
            label={I18n.t('email')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={email}
            onChangeText={(value) => this.handleChange('email',value)}
          />
          <LabeledInput
            label={I18n.t('mobile')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={phone}
            onChangeText={(value) => this.handleChange('phone',value)}
          />
          <LabeledInput
            label={I18n.t('password')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={password}
            secureTextEntry
            onChangeText={(value) => this.handleChange('password',value)}
          />
          <LabeledInput
            label={I18n.t('your_location')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
            value={location}
            onChangeText={(value) => this.handleChange('location',value)}
          />
          <SplashButton
            title={I18n.t('sign_up')}
            onPress={() => this.handleSubmit()}
            style={buttonStyle}
            loading={isFetching}
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
  fontSize:10,
}

const inputLabelStyle = {
  color: '#b0abab',
  marginLeft: 10,
  fontSize: screen.width > 600 ? 16 : 10,

}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: screen.width > 600 ? 20 : 10,

  borderBottomColor: '#B0ABAB',
  borderBottomWidth: 0.5,
}
Register.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#FF2334',
    borderRadius: 20,
    marginHorizontal: 50,
    marginBottom:20,
  },
  containerStyle: {
    position: 'absolute',
    bottom: -45,
    width: '100%',
    paddingHorizontal: 10,
    padding:35,

  },
  titleStyle: {
    color: '#FFFFFF',
    fontWeight: '100',
    fontSize: screen.width > 600 ? 16 : 10,
    fontFamily: 'HelveticaNeueW23forSKY-Reg',
  },
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions,dispatch,),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  userData: state.userData,
  generalData:state.generalData,
})

Register.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register)
