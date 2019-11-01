import React, { Component } from 'react'
import {
  Group, ScrollContainer, CurvedHeader, SplashButton,
} from 'components'
import { Input } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

class CustomerService extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Customer Service',
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
    title:null,
    message:null,
  }

  handleChange =(field,value) => {
    this.setState({
      [field]:value,
    })
  }

  handleSubmit =async () => {
    const { actions:{ sendCustomerService },navigation:{ navigate } } = this.props
    const { title,message } = this.state
    await sendCustomerService({ title,message })
    this.setState({
      title:null,
      message:null,
    })  }

  render() {
    const { title,message } = this.state
    return (
      <ScrollContainer>
        <CurvedHeader type="text" content="Customer Service" style={{ marginBottom: 30 }} />
        <Group style={{ marginHorizontal: 15,marginVertical: 30 }}>
          <Input
            inputStyle={styles.inputStyle.inputStyle}
            label="Title"
            inputContainerStyle={{ borderBottomWidth:0 }}
            labelStyle={{
              marginVertical:10,
            }}
            value={title}
            onChangeText={(value) => this.handleChange('title',value)}
          />
          <Input
            multiline
            inputStyle={{ ...styles.inputStyle.inputStyle  }}
            numberOfLines={5}
            label="Your letter"
            inputContainerStyle={{ borderBottomWidth:0 }}
            labelStyle={{
              marginVertical:10,
            }}
            value={message}
            onChangeText={(value) => this.handleChange('message',value)}
          />
          <SplashButton
            title="Contact Us"
            onPress={() => this.handleSubmit()}
            style={{
              buttonStyle: {
                width: 250,
                backgroundColor: '#1E1E1E',
                borderRadius: 99 * 9,
                alignSelf: 'center',
              },
            }}
          />
        </Group>
      </ScrollContainer>
    )
  }
}

CustomerService.propTypes = {}

const styles = {
  inputStyle: {
    inputStyle: {
      backgroundColor: '#FFF',
      borderRadius: 0,
      shadowColor: '#BF1E1E1E',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 3,
      marginBottom: 15,
    },

    labelStyle: {
      marginLeft: 10,
    },
  },
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions,dispatch),
})

const mapStateToProps = (state) => ({
  common: state.common,
  userData:state.userData,
})

CustomerService.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerService)
