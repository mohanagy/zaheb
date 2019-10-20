import React, { Component } from 'react'
import { ScrollContainer, WorkshopCard } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

import workshops from './_data'

class Purchases extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Sub Services',
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
    const { storeData:{ selectedServiceId },actions:{ getWorkShopsByServiceId },navigation:{ navigate } } = this.props
    if (!selectedServiceId)navigate('SubServices')
    await getWorkShopsByServiceId(selectedServiceId)
  }

  handleSelectWorkShop= async (id) => {
    const { actions:{ selectWorkShop },navigation:{ navigate } } = this.props
    await selectWorkShop(id)
    console.log({
      id,
    })
    navigate('NearestServiceCenter')
  }

  render() {
    const { storeData:{ workshops } } = this.props
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginTop: 20,
        }}
      >
        {
          workshops.map(({
            name,id,image,bio,
          }) => <WorkshopCard source={{ uri:image }} bio={bio} key={id} name={name} onPress={() => this.handleSelectWorkShop(id)} />)
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
  common: state.common,
  userData:state.userData,
})

Purchases.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Purchases)
