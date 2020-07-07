import React, { Component } from 'react'
import { ScrollContainer, SupportTicketCard,Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'


class SupportTickets extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('supports_tickets'),
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
  const { actions:{ getSupportTickets } } = this.props
  await getSupportTickets()
}

handleSelectSupportTicket =async (id) => {
  const { actions:{ setSelectedSupportTicket } ,navigation:{ navigate } } = this.props
  await setSelectedSupportTicket(id)

  navigate('SupportTicketChat')
}


render() {
  const { userData:{ customerServices,isFetching } } = this.props

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
        customerServices.map(({
          id,user_id,title,message,updated_at,
        }) =>  (
          <SupportTicketCard
            key={id}
            user_id={user_id}
            title={title}
            message={message}
            updated_at={updated_at}
            handleSelectSupportTicket={() => this.handleSelectSupportTicket(id)}
          />
        ))
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

SupportTickets.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportTickets)
