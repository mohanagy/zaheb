import React, { Component } from 'react'
import { ScrollContainer, RequestCard } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

import requests from './_data'

class MyRequests extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Requests',

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
  const { actions:{ getMyRequests } } = this.props
  await getMyRequests()
}

render() {
  const { storeData:{ myRequests } } = this.props
  return (
    <ScrollContainer
      contentContainerStyle={{
        marginTop: 20,
      }}
    >
      {
        myRequests.map(({
          image,id ,service_time,service_date,service,
        }) => <RequestCard key={id} name={service.en_name} date={service_date} time={service_time} source={{ uri:image }} />)
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

MyRequests.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyRequests)
