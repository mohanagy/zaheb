import React, { Component } from 'react'
import {
  Group, Details, CurvedHeader, LabeledInputWithIcon, ScrollContainer,
} from 'components'
import { Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

const screen = Dimensions.get('screen')

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Profile',
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

  state={
    user:{
      name:'',
      username:'',
      id:'',
      address:'',
      email:'',
      password:'',
      phone:'',
      language:'',
      image:'',
    },
  }

  componentDidMount =async () => {
    const { actions:{ getUserProfile } } = this.props
    const user =  await getUserProfile()
    this.setState({
      user,
    })
  }

  handleUpdateProfile =async (field,value) => {
    const { actions:{ updateProfile } } = this.props
    await updateProfile(field,value)
  }

  handleChange =async (field,value) => {
    const { user } = this.state
    this.setState({
      user:{
        ...user,
        [field]:value,
      },
    })
  }

  render() {
    const {   user  } = this.state
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height, paddingBottom: 50 }}>
          <Group>
            <CurvedHeader type="image" source={{ uri:user.image }} fillSource />
          </Group>
          <Details text={user.username} style={{ color: 'black' }} />
          <Details text={`No.${user.id}`} style={{ color: 'black' }} />
          <Details text={`${user.address || ''}`} style={{ color: 'black', fontSize: 10 }} />
          <Group>
            <Details text="Private Details" style={{ alignSelf: 'flex-start', color: '#1E1E1E' }} />
            <LabeledInputWithIcon
              label="Name"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: user.name,
                onChangeText:(value) => this.handleChange('name',value),
              }}
              onPressOnIcon={() => this.handleUpdateProfile('name',user.name)}
            />
            <LabeledInputWithIcon
              label="Email"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: user.email,
                onChangeText:(value) => this.handleChange('email',value),

              }}
              onPressOnIcon={() => this.handleUpdateProfile('email',user.email)}

            />
            <LabeledInputWithIcon
              label="Password"
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
              label="Mobile Number"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: user.phone,
                onChangeText:(value) => this.handleChange('phone',value),
              }}
              onPressOnIcon={() => this.handleUpdateProfile('phone',user.phone)}

            />
            <LabeledInputWithIcon
              label="Location"
              labelStyle={styles.inputLabelStyle}
              icon="plus"
              inputProps={{
                style: styles.inputStyle,
                value: user.address || '',
                onChangeText:(value) => this.handleChange('address',value),
              }}
              onPressOnIcon={() => this.handleUpdateProfile('address',user.address)}

            />
            <LabeledInputWithIcon
              label="Language"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: user.language,
                onChangeText:(value) => this.handleChange('language',value),
              }}
              onPressOnIcon={() => this.handleUpdateProfile('language',user.language)}

            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

const styles = {
  inputLabelStyle: { color: '#1E1E1E', alignSelf: 'flex-start', fontWeight: '100' },
  inputStyle: {
    backgroundColor: '#FFF', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, width: screen.width - 80,
  },
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions,dispatch),
})

const mapStateToProps = (state) => ({
  common: state.common,
  userData:state.userData,
})

Profile.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)
