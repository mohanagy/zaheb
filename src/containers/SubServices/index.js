import React, { Component } from 'react'
import { Group, SubServiceCard, ScrollContainer } from 'components'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')


class SubServices extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('sub_services'),
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

  state = { filteredServices: [], search: '' };

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

  handleSearch = (text) => {
    const {
      storeData: { services },
    } = this.props

    this.setState({
      search: text,
    })
    if (!text) {
      this.setState({
        filteredServices: services,
      })
    }
    const filtered = services.filter((service) =>
      service.en_name.toLowerCase().includes(text.toLowerCase())  || service.ar_name.includes(text)
    )
    this.setState({
      filteredServices: filtered,
    })
  };

  render() {
    const { storeData:{ services,isFetching } } = this.props
    const { filteredServices, search } = this.state

    const data =
    filteredServices.length || search ? filteredServices : services

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
        <Input
          placeholder="Search" onChangeText={this.handleSearch}
        />
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
          {
            data.map(({ image ,id,en_name,ar_name }) => (
              <SubServiceCard
                source={{ uri: image }}
                style={{
                  width:120,
                  height:120,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                }}
                containerStyle={{ overflow: 'hidden' }}
                key={id}
                name={I18n.locale === 'ar' ? (ar_name || en_name) : en_name}
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
  generalData:state.generalData,
  userData:state.userData,
})

SubServices.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubServices)
