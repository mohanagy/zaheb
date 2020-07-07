import React, { Component } from 'react'
import {
  Group,
  Details,
  CurvedHeader,
  LabeledInputWithIcon,
  ScrollContainer,
} from 'components'
import { Dimensions, ActivityIndicator, Platform } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-picker'
import API from 'api'
import axios from 'axios'
import I18n from '../../utilites/i18n'
const { api } = API

const screen = Dimensions.get('screen')

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('my_profile'),
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
        onPress={() => navigation.navigate('Notifications')}
        solid
        style={{
          marginRight: 10,
          color: '#ffffff',
        }}
      />
    ),
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
      />
    ),
  });

  state = {
    user: {
      name: '',
      username: '',
      id: '',
      address: '',
      email: '',
      password: '',
      phone: '',
      language: '',
      image: '',
    },
  };

  componentDidMount = async () => {
    const {
      actions: { getUserProfile },
      navigation: { navigate },
    } = this.props
    const user = await getUserProfile()
    this.setState({
      user,
    })
    const { type } = user
    if (type !== '4') navigate('ProfileDriver')
  };

  handleUpdateProfile = async (field, value) => {
    const {
      actions: { updateProfile },
    } = this.props
    await updateProfile(field, value)
  };

  handleChange = async (field, value) => {
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [field]: value,
      },
    })
  };

  uploadPic = async () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    }

    ImagePicker.launchImageLibrary(options, async (response) => {
      const {navigation:{navigate}} = this.props
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        let source
        if (Platform.OS === 'android') {
          source = response.uri
        } else {
          source = response.uri.replace('file://', '')
        }
        const data = new FormData()
        data.append('image', {
          uri: source,
          name: 'image.jpg',
          type: ' image/jpeg',
        })
        const {
          userData: { accessToken },
        } = this.props

        await axios({
          url: 'https://marenksa.com/api/update-profile/image',
          method: 'post',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': '',
          },
          data,
        })
        navigate('Profile')
      }
    })
  };

  render() {
    const { user } = this.state
    const {
      userData: { isFetching },
    } = this.props

    if (isFetching || !user) {
      return (
        <Group
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    // const { user:{ type } } = this.state
    const {
      userData: {
        user: { type },
      },
    } = this.props
    if (type === '4') {
      return (
        <ScrollContainer>
          <Group
            style={{
              backgroundColor: '#F6F6F6',
              minHeight: screen.height,
              paddingBottom: 50,
            }}>
            <Group>
              <CurvedHeader
                type="image"
                source={{ uri: user.image }}
                fillSource
                profile="profile"
                uploadPic={this.uploadPic}
              />
            </Group>
            <Details text={user.username} style={{ color: 'black' }} />
            <Details text={`No.${user.id}`} style={{ color: 'black' }} />
            <Details
              text={`${user.address || ''}`}
              style={{ color: 'black', fontSize: 10 }}
            />
            <Group>
              <Details
                text={I18n.t('private_details')}
                style={{ alignSelf: 'flex-start', color: '#1E1E1E' }}
              />
              <LabeledInputWithIcon
                label={I18n.t('name')}
                labelStyle={styles.inputLabelStyle}
                icon="edit"
                inputProps={{
                  style: styles.inputStyle,
                  value: user.name,
                  onChangeText: (value) => this.handleChange('name', value),
                }}
                onPressOnIcon={() =>
                  this.handleUpdateProfile('name', user.name)
                }
              />
              <LabeledInputWithIcon
                label={I18n.t('email')}
                labelStyle={styles.inputLabelStyle}
                icon="edit"
                inputProps={{
                  style: styles.inputStyle,
                  value: user.email,
                  onChangeText: (value) => this.handleChange('email', value),
                  keyboardType: 'email-address',
                }}
                onPressOnIcon={() =>
                  this.handleUpdateProfile('email', user.email)
                }
              />
              <LabeledInputWithIcon
                label={I18n.t('password')}
                labelStyle={styles.inputLabelStyle}
                icon="edit"
                inputProps={{
                  secureTextEntry: true,
                  style: styles.inputStyle,
                  value: '**********',
                  // onChangeText:(value) => this.handleChange('name',value),
                }}
                onPressOnIcon={() => {}}
              />
              <LabeledInputWithIcon
                label={I18n.t('mobile')}
                labelStyle={styles.inputLabelStyle}
                icon="edit"
                inputProps={{
                  style: styles.inputStyle,
                  value: user.phone,
                  onChangeText: (value) => this.handleChange('phone', value),
                  keyboardType: 'phone-pad',
                }}
                onPressOnIcon={() =>
                  this.handleUpdateProfile('phone', user.phone)
                }
              />
              <LabeledInputWithIcon
                label={I18n.t('location')}
                labelStyle={styles.inputLabelStyle}
                icon="plus"
                inputProps={{
                  style: styles.inputStyle,
                  value: user.address || '',
                  onChangeText: (value) => this.handleChange('address', value),
                }}
                onPressOnIcon={() =>
                  this.handleUpdateProfile('address', user.address)
                }
              />
            </Group>
          </Group>
        </ScrollContainer>
      )
    } else {
      return (
        <Group
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
        </Group>
      )
    }
  }
}

const styles = {
  inputLabelStyle: {
    color: '#1E1E1E',
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  inputStyle: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: screen.width - 80,
  },
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions, dispatch),
})

const mapStateToProps = (state) => ({
  generalData: state.generalData,
  userData: state.userData,
})

Profile.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
