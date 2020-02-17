import React, { Component } from 'react'
import { ScrollContainer, ConversationCard,Group } from 'components'
import { ActivityIndicator,Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'


class Conversations extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('conversations'),
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

componentDidMount =async () => {
  const { actions:{ getConversations } } = this.props
  await getConversations()
}

handleSelectConversation =async (id,name,image) => {
  const { actions:{ setSelectedConversation } ,navigation:{ navigate } } = this.props
  await setSelectedConversation(id,name,image)
  navigate('Chat')
}

render() {
  const { userData:{ conversations,isFetching } } = this.props

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
      contentContainerStyle={{ marginTop: 20 }}
    >
      {
        conversations.map(({ id,room }) => room.receiver && <ConversationCard key={id} room={room} handleSelectConversation={this.handleSelectConversation} />)
      }
    </ScrollContainer>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions ,dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

Conversations.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Conversations)
