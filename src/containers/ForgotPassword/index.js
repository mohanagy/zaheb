import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Logo, Title, Group, SplashButton,
  InputField, SimpleForm, LabeledInput,
  Details, Dot,
} from 'components'
import logo from 'assets/logo.png'
import blurredBackground from 'assets/blurred-background.png'

class ForgotPassword extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation: { navigate } } = this.props
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
            label="E-Mail"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={inputContainerStyle}
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
            label="Mobile number"
            inputStyle={inputStyle}
            labelStyle={inputLabelStyle}
            containerStyle={{ ...inputContainerStyle, marginBottom: 60 }}
          />
          <SplashButton
            title="Send"
            onPress={() => navigate('PreviousOrders')}
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

export default ForgotPassword
