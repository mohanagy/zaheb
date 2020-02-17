import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton,  SimpleForm, LabeledInput,  Dot,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
import { Dimensions, TouchableOpacity, Image } from 'react-native'

import logo from 'assets/marinLogo.png'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')


class UpdatePassword extends Component {
  state={
    password:null,
    confirmPassword:null,
  }

  handleChange =(field,value) => {
    this.setState({
      [field]:value,
    })
  }

  handleSubmit =async () => {
    const { actions:{ updatePassword },navigation:{ navigate } } = this.props
    const { password,confirmPassword } = this.state
    if (!password || !confirmPassword) return ''
    const check = await updatePassword({ confirmPassword ,password })
    if (check)navigate('Login')
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    const { userData:{ isFetching } } = this.props
    const { password,confirmPassword } = this.state
    return (
      <SimpleForm
        backgroundSource={blurredBackground}
        backgroundOverlay="#00000095"
        after={<Group style={{ marginVertical: 30 }} />}
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
              top: -80,
              left: (screen.width * 0.5) - 28 - 70,
              backgroundColor: '#FFF',
              borderTopLeftRadius: 9 ** 9,
              borderTopRightRadius: 9 ** 9,
              paddingHorizontal: 10,
              width: 140,
              height: 140,
            }}
          >
            <Image source={logo} style={{ width: 120, height: 120,resizeMode:'contain' }} />
          </Group>
          <LabeledInput
            label={I18n.t('enter_your_password')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={password}
            onChangeText={(value) => this.handleChange('password',value)}
          />
          <Group
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Dot />
            <Dot />
          </Group>
          <LabeledInput
            label={I18n.t('enter_your_confirm_password')}
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
            value={confirmPassword}
            onChangeText={(value) => this.handleChange('confirmPassword',value)}
          />
          <SplashButton
            loading={isFetching}
            title={I18n.t('send')}
            onPress={() => this.handleSubmit()}
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
  fontSize: screen.width > 600 ? 14 : 10,
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 20,
  borderBottomColor: '#B0ABAB',
  borderBottomWidth: 0.5,
}
UpdatePassword.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#FF2334',
    borderRadius: 20,
    marginHorizontal: 50,
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
    fontSize: screen.width > 600 ? 18 : 10,
    fontFamily: 'HelveticaNeueW23forSKY-Reg',
  },
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions,dispatch,),
})

const mapStateToProps = (state) => ({
  user: state.userData.user,
  userData:state.userData,
  generalData: state.generalData,
})

UpdatePassword.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdatePassword)
