import React, { Component } from 'react'
import { Group, SubServiceCard, ScrollContainer } from 'components'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

const screen = Dimensions.get('screen')


class SubServices extends Component {
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

  componentDidMount=async () => {
    const { storeData:{ selectedCarId },actions:{ getServicesByCarId },navigation:{ navigate } } = this.props
    if (!selectedCarId)navigate('HomePage')
    await getServicesByCarId(selectedCarId)
  }

  handleSelectService=async (id) => {
    const { actions:{ selectService },navigation:{ navigate } } = this.props
    await selectService(id)
    navigate('Workshops')
  }

  render() {
    const { storeData:{ services,isFetching } } = this.props
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
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          {
            services.map(({ image ,id,en_name }) => (
              <SubServiceCard
                source={{ uri: image }}
                style={{
                  width:100,
                  height:70,
                }}
                key={id}
                name={en_name}
                onPress={() => this.handleSelectService(id)}
              />
            ))
          }
        </Group>
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

SubServices.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubServices)
