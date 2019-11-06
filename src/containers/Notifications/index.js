import React, { Component } from 'react'
import {
  Group, BackgroundImageWrapper, ScrollContainer, NotificationRow,
} from 'components'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import bg from '../../assets/blurred-background.png'


const screen = Dimensions.get('screen')

class Notifications extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Notifications',
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
    const { actions:{ getNotifications } } = this.props
    await getNotifications()
  }

  handleClickOnNotification =async (notification) => {
    const { navigation:{ navigate },actions:{ setSelectedConversation,selectProduct } } = this.props
    const { url } = notification

    if (url.includes('myOffers')) {
      navigate('MyOffers')
    }
    else if (url.includes('conversation')) {
      const { sender_id ,image } = notification
      await  setSelectedConversation(sender_id,'',image)

      navigate('Chat')
    }
    else if (url.includes('getCustomerServiceById')) {

    } else if (url.includes('getProductOrderByOrderId')) {
      const [,id] = url.split('=')
      await selectProduct(id)
      navigate('PurchaseDetails')
    }
  }

  render() {
    const { generalData:{ notifications,isFetching } } = this.props
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
      <BackgroundImageWrapper source={bg}>
        <ScrollContainer>
          <Group style={{ minHeight: screen.height, backgroundColor: '#FFF8' }}>
            {notifications.map((datum) => (
              <NotificationRow
                {...datum}
                handleClickOnNotification={() => this.handleClickOnNotification(datum)}
              />
            ))}
          </Group>
        </ScrollContainer>
      </BackgroundImageWrapper>
    )
  }
}

Notifications.propTypes = {

}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...generalActions,...usersActions,...storeActions },dispatch),
})

const mapStateToProps = (state) => ({
  generalData: state.generalData,
})

Notifications.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications)
