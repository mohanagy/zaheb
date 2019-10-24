import React, { Component } from 'react'
import { Dimensions ,Linking } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
  Group, CurvedHeader, LabeledInput,
} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import PropTypes from 'prop-types'


const screen = Dimensions.get('screen')

class ContactUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Contact Us',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      color: '#ffffff',
    },
    headerStyle: {
      backgroundColor: '#1E1E1E',
    },
    headerRight: (
      <FontAwesome5
        name="bell"
        size={18}
        onPress={() => {}}
        solid
        style={{
          marginRight: 10,
          color: '#ffffff',

        }}
      />),
    headerLeft: (
      <FontAwesome5
        name="stream"
        size={18}
        onPress={() => navigation.toggleDrawer()}
        solid
        style={{
          marginLeft: 10,
          color: '#ffffff',

        }}
      />),
  });


  componentDidMount =async () => {
    const { actions:{ getContactUs } } = this.props
    await getContactUs()
  }

  handleOpenLink= (link) => {
    Linking.openURL(link)
  }

  render() {
    const {
      generalData:{
        contactUs:{
          address ,website ,email ,phone,
          facebook,twitter,linkedin,
        },
      },
    } = this.props

    return (
      <Group style={{ backgroundColor: '#F6F6F6' }}>
        <CurvedHeader type="text" content="Contact us" />
        <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
          <LabeledInput
            label="Location"
            placeholder={address.value}
            disabled
            inputStyle={inputStyle}
            underlineColorAndroid="transparent"
            containerStyle={{ ...inputContainerStyle, marginTop: 40 }}
            labelStyle={inputLabelStyle}
          />
          <LabeledInput
            label="Mobile"
            disabled
            placeholder={phone.value}
            inputStyle={inputStyle}
            containerStyle={inputContainerStyle}
            labelStyle={inputLabelStyle}
          />
          <LabeledInput
            label="Email"
            disabled
            placeholder={email.value}
            inputStyle={inputStyle}
            containerStyle={inputContainerStyle}
            labelStyle={inputLabelStyle}
          />
          <Group
            style={{
              marginTop: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 200,
              alignSelf: 'center',
            }}
          >
            <FontAwesome5 size={30} name="google-plus" onPress={() => this.handleOpenLink(website.value)} />
            <FontAwesome5 size={30} name="twitter" onPress={() => this.handleOpenLink(twitter.value)} />
            <FontAwesome5 size={30} name="facebook" onPress={() => this.handleOpenLink(facebook.value)} />
            <FontAwesome5 size={30} name="linkedin" onPress={() => this.handleOpenLink(linkedin.value)} />
          </Group>
        </Group>
      </Group>
    )
  }
}

const inputStyle = {
  backgroundColor: '#FFF',
  borderRadius: 6,
  borderBottom: 'none',
  borderBottomColor: 'rgba(255, 255, 255, 0)',
  paddingHorizontal: 15,
  fontSize:16,
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 10,
}

const inputLabelStyle = {
  marginHorizontal: 10,
  marginBottom: 10,
  fontSize: 16,
}

ContactUs.propTypes = {
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...generalActions },dispatch),
})

const mapStateToProps = (state) => ({
  generalData: state.generalData,
})

ContactUs.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactUs)
