import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import {
  Title, Group, SplashButton,
  SimpleForm, LabeledInput,
  Details,
} from 'components'
import blurredBackground from 'assets/blurred-background.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
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
              fontWeight: '9',
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
                text="Already got an account?"
                style={{
                  marginHorizontal:5,
                }}
              />
              <TouchableOpacity
                onPress={() => navigate('Login')}
              >
                <Details
                  text="Sign in"
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
          <Title
            text={[
              (<Title text="Z" style={{ color: '#BE1522' }} />),
              (<Title text="AHEB" style={{ color: '#1E1E1E' }} />),
            ]}
          />
          <LabeledInput
            isRequired
            label="Full name"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={name}
            onChangeText={(value) => this.handleChange('name',value)}
          />
          <LabeledInput
            isRequired
            label="User name"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={username}
            onChangeText={(value) => this.handleChange('username',value)}
          />
          <LabeledInput
            label="E-Mail"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={email}
            onChangeText={(value) => this.handleChange('email',value)}

          />
          <LabeledInput
            label="Mobile number"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={phone}
            onChangeText={(value) => this.handleChange('phone',value)}

          />
          <LabeledInput
            label="Password"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
            value={password}
            secureTextEntry
            onChangeText={(value) => this.handleChange('password',value)}

          />
          <LabeledInput
            label="Your location"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
            value={location}
            onChangeText={(value) => this.handleChange('location',value)}

          />
          <SplashButton
            title="Sign Up"
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
}

const inputLabelStyle = {
  color: '#b0abab',
  marginLeft: 10,
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 20,
}
Register.propTypes = {
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
