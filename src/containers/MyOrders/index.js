import React, { Component } from 'react'
import { ScrollContainer, OrderCard, Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'

class MyOrders extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('my_orders'),

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
      actions: { getMyDriverOrders },
    } = this.props
    await getMyDriverOrders()
  };

  handleAccept = async id => {
    const {
      actions: { handleAcceptOrder, getMyDriverOrders },
    } = this.props
    await handleAcceptOrder(id)
    await getMyDriverOrders()
  };

  handleCancel = async id => {
    const {
      actions: { handleCancelOrder, getMyDriverOrders },
    } = this.props
    await handleCancelOrder(id)
    await getMyDriverOrders()
  };

  handleSelectProfile = async id => {
    const {
      actions: { selectOrderId },
      navigation: { navigate },
    } = this.props
    await selectOrderId(id)
    navigate('MyOrderDetails')
  };

  render() {
    const {
      storeData: { myOrders, isFetching },
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
          marginBottom: 20,
        }}
      >
        {[].map(({ product, id, service }) => (
          <OrderCard
            key={id}
            name={product ? product.name : service.name}
            handleAccept={() => this.handleAccept(id)}
            handleCancel={() => this.handleCancel(id)}
            source={{ uri: product ? product.image : service.image }}
            handleSelectProfile={() => this.handleSelectProfile(id)}
          />
        ))}
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

MyOrders.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
