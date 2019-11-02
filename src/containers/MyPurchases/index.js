import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { ScrollContainer, PurchaseCard ,Group } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'


class Purchases extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Purchases',
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
    const { actions:{ getMyPurchases } } = this.props
    await getMyPurchases()
  }

  render() {
    const { storeData:{ myPurchases,isFetching } } = this.props
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
        }}
      >
        {
          myPurchases && myPurchases.map(({
            id,product,created_at,cost,
          }) => <PurchaseCard key={id} name={product.name} date={moment(created_at).format('DD/MM/YYYY')} source={{ uri:product.image }} cost={cost} />)
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

Purchases.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Purchases)
