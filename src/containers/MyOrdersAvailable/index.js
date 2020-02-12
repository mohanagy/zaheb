import React, { Component } from 'react'
import { ScrollContainer, AvailableOrderCard ,Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'


class MyOrderAvailable extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Order Available',

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
  const { actions:{ getMyAvailableOrders } } = this.props
  await getMyAvailableOrders()
}

handleAccept =async (id) => {
  const { actions :{ handleAcceptOrder ,getMyAvailableOrders } } = this.props
  await handleAcceptOrder(id)
  await getMyAvailableOrders()
}

handleSelectProfile =async (id) => {
  const { actions :{ selectOrderId },navigation:{ navigate } } = this.props
  await selectOrderId(id)
  navigate('OrderAvailableDetails')
}

handleCancel =async (id) => {
  const { actions :{ handleCancelOrder,getMyAvailableOrders } } = this.props
  await handleCancelOrder(id)
  await getMyAvailableOrders()
}

render() {
  const { storeData:{ myAvailableOrders,isFetching } } = this.props
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
      contentContainerStyle={{
        marginTop: 20,
        height:'100%',
      }}
    >
      {
        myAvailableOrders.map(({
          product,id ,service,
        }) => (
          <AvailableOrderCard
            key={id}
            name={product ? product.name : service.name}
            handleAccept={() => this.handleAccept(id)}
            handleCancel={() => this.handleCancel(id)}
            source={{ uri:product ? product.image : service.image }}
            handleSelectProfile={() => this.handleSelectProfile(id)}
          />
        ))
      }
    </ScrollContainer>
  )
}
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

MyOrderAvailable.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyOrderAvailable)
