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
import I18n from '../../utilites/i18n'

class CustomerService extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('customers_service'),
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
    const { actions:{ sendCustomerService } } = this.props
    const { title,message } = this.state
    await sendCustomerService({ title,message })
    this.setState({
      title:null,
      message:null,
    })  }

  render() {
    const { title,message } = this.state
    const { userData:{ isFetching } } = this.props
    return (
      <ScrollContainer>
        <CurvedHeader type="text" content={I18n.t('customers_service')} style={{ marginBottom: 30 }} />
        <Group style={{ marginHorizontal: 15,marginVertical: 30 }}>
          <Input
            inputStyle={styles.inputStyle.inputStyle}
            label={I18n.t('title')}
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
            label={I18n.t('your_letter')}
            inputContainerStyle={{ borderBottomWidth:0 }}
            labelStyle={{
              marginVertical:10,
            }}
            value={message}
            onChangeText={(value) => this.handleChange('message',value)}
          />
          <SplashButton
            title={I18n.t('contact_us')}
            loading={isFetching}
            onPress={() => this.handleSubmit()}
            style={{
              buttonStyle: {
                paddingHorizontal: 45,
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
      borderColor: '#1E1E1E',
      borderRadius: 5,
      borderWidth: 0.5,
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
  generalData:state.generalData,
  userData:state.userData,
})

CustomerService.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerService)
