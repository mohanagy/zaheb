import React, { Component } from 'react'
import {
  Group, Details, Conversation, ScrollContainer ,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Image, Dimensions ,BackHandler } from 'react-native'
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'


const screen = Dimensions.get('screen')

class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Chat',
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
    message:'',
  }

  componentDidMount =async () => {
    const { actions:{ getConversationByReceiverId },userData:{ selectedReceiver:{ id } } ,navigation:{ navigate } } = this.props


    if (!id)navigate('Conversations')
    await getConversationByReceiverId(id)
  }

  handleSendMessage =async (id,message) => {
    const { actions:{ sendConversationMessage } } = this.props
    await sendConversationMessage(id,message)
    this.setState({
      message:'',
    })
  }

  handleChangeText =async (value) => {
    this.setState({
      message:value,
    })
  }

  handleBack =async () => {
    const { navigation:{ navigate } } = this.props
    navigate('Conversations')
  }

  render() {
    const { userData:{ conversation,selectedReceiver:{ name,image,id } } } = this.props
    const { message } = this.state
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
          <Group><FontAwesome5 name="arrow-left" size={25} color="#FFF" onPress={() => this.handleBack()} /></Group>
          <Group><Details text={name} style={{ color: '#FFF', fontSize: 22 }} /></Group>
          <Group><Image source={{ uri:image }} style={{ width: 50, height: 50, borderRadius: 99 ** 9 }} /></Group>
        </Group>
        <ScrollContainer>

          <Group><Conversation conversation={conversation} /></Group>
        </ScrollContainer>
        <Group style={{ flexDirection: 'row', backgroundColor: '#1E1E1E', padding: 10 }}>
          <Input
            inputStyle={{ backgroundColor: '#FFF' }}
            containerStyle={{ width: screen.width - 90, borderBottomWidth: 0, borderRadius: 10 }}
            value={message}
            onChangeText={(text) => this.handleChangeText(text)}

          />
          <FontAwesome5 name="telegram" size={50} style={{ color: '#FFF', marginLeft: 20 }} onPress={() => this.handleSendMessage(id,message)} />
        </Group>
      </Group>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  common: state.common,
  userData:state.userData,
})

Chat.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat)
