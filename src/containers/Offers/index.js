import React, { Component } from 'react'
import { ScrollContainer, OfferCard ,Group } from 'components'
import { ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import PropTypes from 'prop-types'

class Offers extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Offers',
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
  const { actions:{ getMyRequestedOffers } } = this.props
  await getMyRequestedOffers()
}

handleCancel =async (id) => {
  const { actions:{ cancelMyRequestedOffers,getMyRequestedOffers } } = this.props
  await cancelMyRequestedOffers(id)
  await getMyRequestedOffers()
}

handleSelectWorkShop= async (id) => {
}


handleMap =async (workshopId,serviceId) => {
  const { actions:{ selectWorkShop,selectService },navigation:{ navigate } } = this.props
  await selectWorkShop(workshopId)
  await selectService(serviceId)
  navigate('NearestServiceCenter')
}

handlePlus =async (id) => {
  const { actions:{ selectOrderId },navigation:{ navigate } } = this.props
  await selectOrderId(id)
  navigate('OfferDetails')
}

render() {
  const { storeData:{ offers,isFetching } } = this.props
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
    <ScrollContainer contentContainerStyle={{ marginTop: 20 }}>
      {
        offers.map(({ description,service,id }) => (
          <OfferCard
            isFetching={isFetching}
            description={description}
            service={service}
            key={id}
            handleCancel={() => this.handleCancel(id)}
            handlePlus={() => this.handlePlus(id)}
            handleMap={() => this.handleMap(id,service.id)}
          />
        ))
      }
    </ScrollContainer>
  )
}
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  userData:state.userData,
})

Offers.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Offers)
