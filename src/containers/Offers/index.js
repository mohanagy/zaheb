import React, { Component } from 'react'
import { ScrollContainer, OfferCard } from 'components'
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

componentDidMount =async () => {
  const { actions:{ getMyRequestedOffers } } = this.props
  await getMyRequestedOffers()
  console.log('aslkdklsadmklsamd')
}

handleCancel =async (id) => {
  const { actions:{ cancelMyRequestedOffers,getMyRequestedOffers } } = this.props
  await cancelMyRequestedOffers(id)
  console.log('sadklsad')
  await getMyRequestedOffers()
}

render() {
  const { storeData:{ offers } } = this.props
  return (
    <ScrollContainer contentContainerStyle={{ marginTop: 20 }}>
      {
        offers.map(({ description,service,id }) => <OfferCard description={description} service={service} key={id} handleCancel={() => this.handleCancel(id)} />)
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