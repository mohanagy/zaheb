import React, { Component } from 'react'
import { Dimensions ,Linking ,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
  Group, CurvedHeader, LabeledInput,ScrollContainer,
} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'


const screen = Dimensions.get('screen')

class ContactUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('contact_us'),
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center',
      color: '#ffffff',
    },
    headerStyle: {
      backgroundColor: '#1E1E1E',
    },
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
        isFetching,
      },
    } = this.props

    if (isFetching) { return (
      <Group
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </Group>
    ) }
    return (
      <ScrollContainer
        contentContainerStyle={{
        }}
      >
        <Group style={{ backgroundColor: '#F6F6F6' }}>

          <CurvedHeader type="text" content={I18n.t('contact_us')} />
          <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
            <LabeledInput
              label={I18n.t('location')}
              placeholder={address.value}
              disabled
              inputStyle={inputStyle}
              underlineColorAndroid="transparent"
              containerStyle={{ ...inputContainerStyle, marginTop: 40 }}
              labelStyle={inputLabelStyle}
            />
            <LabeledInput
              label={I18n.t('location')}
              disabled
              placeholder={phone.value}
              inputStyle={inputStyle}
              containerStyle={inputContainerStyle}
              labelStyle={inputLabelStyle}
            />
            <LabeledInput
              label={I18n.t('mobile')}
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
      </ScrollContainer>

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
