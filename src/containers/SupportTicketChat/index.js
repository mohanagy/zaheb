import React, { Component } from 'react'
import { Group, Conversation, ScrollContainer } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions, ActivityIndicator } from 'react-native'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class SupportTicketChat extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('support_ticket_chat'),
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
    message: '',
  };

  componentDidMount = async () => {
    const {
      actions: { getCustomerServiceById },
      userData: { selectedSupportTicket },
      navigation: { navigate },
    } = this.props

    if (!selectedSupportTicket) navigate('SupportTickets')
    await getCustomerServiceById(selectedSupportTicket)
  };

  handleSendMessage = async (id, message) => {
    const {
      actions: { sendSupportTicketReply },
    } = this.props
    await sendSupportTicketReply(id, message)
    this.setState({
      message: '',
    })
  };

  handleChangeText = async value => {
    this.setState({
      message: value,
    })
  };

  handleBack = async () => {
    const {
      navigation: { navigate },
    } = this.props
    navigate('SupportTickets')
  };

  render() {
    const {
      userData: { supportTicketConversation, selectedSupportTicket, isFetching },
    } = this.props
    const { message } = this.state

    if (isFetching) {
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
          }}
        >
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    return (
      <Group
        style={{
          backgroundColor: '#F6F6F6',

          flex: 1,
        }}
      >
        <Group
          style={{
            backgroundColor: '#B0ABAB',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center',
          }}
        >
          <Group>
            <FontAwesome5
              name="arrow-left"
              size={25}
              color="#FFF"
              onPress={() => this.handleBack()}
            />
          </Group>
        </Group>
        <ScrollContainer>
          <Group>
            <Conversation conversation={supportTicketConversation} />
          </Group>
        </ScrollContainer>
        <Group
          style={{
            flexDirection: 'row',
            backgroundColor: '#1E1E1E',
            padding: 10,
          }}
        >
          <Input
            inputStyle={{ backgroundColor: '#FFF' }}
            containerStyle={{
              width: screen.width - 90,
              borderBottomWidth: 0,
              borderRadius: 10,
            }}
            value={message}
            onChangeText={text => this.handleChangeText(text)}
          />
          <FontAwesome5
            name="telegram"
            size={50}
            style={{ color: '#FFF', marginLeft: 20 }}
            onPress={() =>
              this.handleSendMessage(selectedSupportTicket, message)
            }
          />
        </Group>
      </Group>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...usersActions }, dispatch),
})

const mapStateToProps = state => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

SupportTicketChat.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportTicketChat)
