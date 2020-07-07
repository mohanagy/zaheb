import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { ScrollContainer, WorkshopCard, Group, SplashButton } from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import { Input } from 'react-native-elements'
import I18n from '../../utilites/i18n'

class Purchases extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('workshops'),
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

  state = { filteredWorkshops: [], search: '' };

  componentDidMount = async () => {
    const {
      storeData: { selectedServiceId },
      actions: { getWorkShopsByServiceId },
      navigation: { navigate },
    } = this.props
    if (!selectedServiceId) navigate('SubServices')

    await getWorkShopsByServiceId(selectedServiceId)
  };

  handleBooking = async (id) => {
    const {
      actions: { selectWorkShop,skippedWorkShop,noConfirmationButton },
      navigation: { navigate },
    } = this.props

    await selectWorkShop(id)
    await skippedWorkShop(false)
    await noConfirmationButton(false)
    navigate('NearestServiceCenter')
  };

  handleSelectWorkShop = async (id) => {
    const {
      actions: { selectWorkShop },
      navigation: { navigate },
    } = this.props
    await selectWorkShop(id)
    navigate('ProfileWorkshop')
  };

  skipWorkShop = async (id) => {
    const {
      navigation: { navigate },
      actions: { skippedWorkShop,selectWorkShop },
    } = this.props
    await skippedWorkShop(true)

    await selectWorkShop(id)
    navigate('Services')
  };

  handleSearch = (text) => {
    const {
      storeData: { workshops },
    } = this.props

    this.setState({
      search: text,
    })
    if (!text) {
      this.setState({
        filteredWorkshops: workshops,
      })
    }
    const filtered = workshops.filter((workshop) =>
      workshop.name.includes(text)
    )
    this.setState({
      filteredWorkshops: filtered,
    })
  };

  render() {
    const {
      storeData: { workshops, isFetching },
    } = this.props
    const { filteredWorkshops, search } = this.state
    const data =
      filteredWorkshops.length || search ? filteredWorkshops : workshops
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
          flex: 1,
        }}>
        <Input placeholder="Search" onChangeText={this.handleSearch} />

        <ScrollContainer
          contentContainerStyle={{
            marginTop: 20,
            justifyContent: 'flex-end',
          }}>
          {data.map(({ name, id, image, bio, user_cars }) => (
            <Group
              style={{
                marginVertical: 10,
              }}>
              <WorkshopCard
                source={{ uri: image }}
                bio={bio}
                key={id}
                name={name}
                user_cars={user_cars}
                onPressWorkShopName={() => this.handleSelectWorkShop(id)}
                onPress={() => this.handleBooking(id)}
                onPressSkip={() => this.skipWorkShop(id)}
                skipTitle={I18n.t('skip')}
              />
            </Group>
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

Purchases.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Purchases)
