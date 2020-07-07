import React, { Component } from 'react'
import { ScrollContainer, RequestCard, Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'

const status = {
  '1': I18n.t('new'),
  '2': I18n.t('in_shipping'),
  '3': I18n.t('complete'),
  '4': I18n.t('reject'),
  '5': I18n.t('in_progress'),
}
class MyRequests extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('my_requests'),

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

  componentDidMount = async () => {
    const {
      actions: { getMyRequests },
    } = this.props
    await getMyRequests()
  };

  handleSelectRequest = async id => {
    const {
      actions: { selectOrderId },
      navigation: { navigate },
    } = this.props
    await selectOrderId(id)
    navigate('RequestDetails')
  };

  render() {
    const {
      storeData: { myRequests, isFetching },
    } = this.props


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
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {myRequests.map(
          ({
            image,
            id,
            service_time,
            service_date,
            service,
            workshop_status,
            user_status,
          }) => (
            <RequestCard
              key={id}
              name={
                I18n.locale === 'ar'
                  ? service.ar_name || service.en_name
                  : service.en_name
              }
              handleSelectRequest={() => this.handleSelectRequest(id)}
              date={service_date}
              time={service_time}
              badge={workshop_status === 1 && user_status === 2 ? 'Canceled' : status[workshop_status]}
              source={{ uri: image || service.image }}
            />
          )
        )}
      </ScrollContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = state => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

MyRequests.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequests)
