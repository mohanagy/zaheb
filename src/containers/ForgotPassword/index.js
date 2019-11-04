import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton,  SimpleForm, LabeledInput,  Dot,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
class ForgotPassword extends Component {
  state={
    phone:null,
    email:null,
  }

  handleChange =(field,value) => {
    this.setState({
      [field]:value,
    })
  }

  handleSubmit =async () => {
    const { actions:{ forgetPassword },navigation:{ navigate } } = this.props
    const { phone,email } = this.state
    const check = await forgetPassword({ email ,phone })
    if (check)navigate('Login')
  }

  static navigationOptions = {
    header: null,
  };


  render() {
    const { userData:{ isFetching } } = this.props
    const { phone,email } = this.state
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
          <Title
            text={[
              (<Title text="Z" style={{ color: '#BE1522' }} />),
              (<Title text="AHEB" style={{ color: '#1E1E1E' }} />),
            ]}
          />
          <LabeledInput
            label="Enter your email"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={email}
            onChangeText={(value) => this.handleChange('email',value)}
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
            <Title text="OR" style={{ color: '#be1522', marginBottom: 5 }} />
            <Dot />
          </Group>
          <LabeledInput
            label="Phone number"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
            value={phone}
            onChangeText={(value) => this.handleChange('phone',value)}
          />
          <SplashButton
            loading={isFetching}
            title="Send"
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
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 20,
}
ForgotPassword.propTypes = {
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
    fontWeight: '9',
    fontSize: 18,
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

ForgotPassword.propTypes = {
  navigate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword)
