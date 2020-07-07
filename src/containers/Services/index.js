import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { ScrollContainer, ServiceCard, Group, SplashButton } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'
import I18n from '../../utilites/i18n'

class Services extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('services'),
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

  state = { filteredServiceByIdWorkshops: [], search: '' };

  componentDidMount = async () => {
    const {
      storeData: { selectedWorkShopId, selectedCarId,selectedServiceId    },
      actions: { getServiceByWorkshopsId },
    } = this.props
    console.log({
      selectedWorkShopId, selectedCarId,selectedServiceId,
    })
    await getServiceByWorkshopsId(selectedWorkShopId,selectedCarId,selectedServiceId)
  };

  handleBooking = async (id) => {
    const {
      actions: {  skippedWorkShop, noConfirmationButton,getServiceByWorkshopsId },
      navigation: { navigate },
      storeData:{selectedCarId,selectedServiceId},
    } = this.props

    // await selectWorkShop(id)
    await getServiceByWorkshopsId(id,selectedCarId,selectedServiceId)
    navigate('NearestServiceCenter')
    await skippedWorkShop(false)
    await noConfirmationButton(false)
  };

  handleSelectWorkShop = async (id) => {
    const {
      actions: { selectWorkShop },
      navigation: { navigate },
    } = this.props
    await selectWorkShop(id)
    navigate('ProfileWorkshop')
  };

  skipWorkShop = async () => {
    const {
      navigation: { navigate },
      actions: { skippedWorkShop },
    } = this.props
    await skippedWorkShop(true)
    navigate('NearestServiceCenter')
  };

  handleSelectService =async(id)=>{
    const {actions:{selectNewService,skippedWorkShop,noConfirmationButton},navigation:{navigate}} = this.props
    await selectNewService(id)
    await skippedWorkShop(true)
    await noConfirmationButton(false)
    navigate('NearestServiceCenter')

  }

  handleSearch = (text) => {
    const {
      storeData: { serviceByIdWorkshops },
    } = this.props

    this.setState({
      search: text,
    })
    if (!text) {
      this.setState({
        filteredServiceByIdWorkshops: serviceByIdWorkshops,
      })
    }
    const filtered = serviceByIdWorkshops.filter((workshop) =>
      workshop.name.includes(text)
    )
    this.setState({
      filteredServiceByIdWorkshops: filtered,
    })
  };

  render() {
    const {
      storeData: { serviceByIdWorkshops, isFetching },
    } = this.props
    const { filteredServiceByIdWorkshops, search } = this.state
    console.log({
      serviceByIdWorkshops,
    })
    const data =
    filteredServiceByIdWorkshops.length || search ? filteredServiceByIdWorkshops : serviceByIdWorkshops

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
          }}>
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    return (
      <Group
        style={{
          flex:1,
        }}>
        <Input placeholder="Search" onChangeText={this.handleSearch} />

        <ScrollContainer
          contentContainerStyle={{
            justifyContent: 'flex-end',
            hight:'90%',

          }}>

          {data.map(({ cost, name_service, image, status,id }) => (

            <ServiceCard
              cost={cost}
              image= {image}
              name_service={name_service}
              status={status}
              onPress={()=>this.handleSelectService(id)}
            />
          ))}

        </ScrollContainer>
      </Group>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

Services.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services)
