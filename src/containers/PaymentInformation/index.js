import React, { Component } from 'react'
import {
  Group,
  ScrollContainer,
  Details,
  LabeledInput,
  SplashButton,
} from 'components'
import { Dimensions, Image, ActivityIndicator } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class PaymentInformation extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('payment_information'),
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

  state = {
    product: null,
    receiverName: null,
    city: null,
    street: null,
    phoneNumber: null,
  };

  componentDidMount = async () => {
    const {
      storeData: { selectedProductId, filteredProducts },
    } = this.props
    const product = filteredProducts.find(({ id }) => id === selectedProductId)
    this.setState({
      product,
    })
  };

  handleChangeText = async (value, field) => {
    this.setState({
      [field]: value,
    })
  };

  handleSubmit = async () => {
    const { receiverName, city, phoneNumber, street } = this.state
    const {
      actions: { setShippingDetails },
      navigation: { navigate },
    } = this.props
    await setShippingDetails({
      receiverName,
      city,
      phoneNumber,
      street,
    })

    navigate('Payment')
  };

  handleSubmitWithLocation = async () => {
    const { receiverName, city, phoneNumber, street } = this.state
    const {
      actions: { setShippingDetails },
      navigation: { navigate },
    } = this.props
    Geolocation.getCurrentPosition(
      result => {
        const {
          coords: { latitude, longitude },
        } = result
        setShippingDetails({
          receiverName,
          city,
          phoneNumber,
          street,
          lat: latitude,
          lng: longitude,
        }).then(() => {
          navigate('Payment')
        })
      },
      error => {},
      { enableHighAccuracy: true }
    )
  };

  openMap = () => {
    const {
      navigation: { navigate },
    } = this.props
    navigate('PaymentInformationMap')
  };

  render() {
    const {
      storeData: { isFetching },
    } = this.props
    const { product } = this.state
    if (!product || isFetching) {
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
          }}
        >
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    const { receiverName, city, phoneNumber, street } = this.state
    return (
      <ScrollContainer>
        <Group
          style={{
            minHeight: screen.height,
            backgroundColor: '#F6F6F6',
            padding: 15,
          }}
        >
          <Group
            style={{
              marginVertical: 30,
              backgroundColor: '#FFF',
              borderRadius: 15,
              padding: 10,
              marginBottom: 45,
            }}
          >
            <Details
              text={I18n.t('shipping_address')}
              style={{
                color: '#1E1E1E',
                borderBottomWidth: 2,
                borderBottomColor: '#1E1E1E',
                textAlign: 'left',
                marginHorizontal: 0,
                fontSize: 20,
              }}
            />
            <LabeledInput
              label={I18n.t('name')}
              placeholder={I18n.t('receiver_name')}
              inputStyle={styles.inputStyle}
              value={receiverName}
              onChangeText={value =>
                this.handleChangeText(value, 'receiverName')
              }
            />
            <LabeledInput
              label={I18n.t('city')}
              placeholder={I18n.t('city_example')}
              inputStyle={styles.inputStyle}
              value={city}
              onChangeText={value => this.handleChangeText(value, 'city')}
            />
            <LabeledInput
              label={I18n.t('street')}
              placeholder="S580"
              inputStyle={styles.inputStyle}
              value={street}
              onChangeText={value => this.handleChangeText(value, 'street')}
            />
            <LabeledInput
              label= {I18n.t('mobile')}
              placeholder="05900000000"
              inputStyle={styles.inputStyle}
              value={phoneNumber}
              onChangeText={value =>
                this.handleChangeText(value, 'phoneNumber')
              }
            />
          </Group>
          <Group style={{ flexDirection: 'row' }}>
            <Group>
              <Image
                source={{ uri: product.image }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 25,
                  borderWidth: 1,
                  borderColor: '#1E1E1E',
                }}
              />
            </Group>
            <Group
              style={{ alignItems: 'flex-start', justifyContent: 'center' }}
            >
              <Details text={product.name} style={{ color: '#1E1E1E' }} />
              <Details text={`${product.cost} SAR`} style={{ color: '#1E1E1E' }} />
            </Group>
          </Group>
          <SplashButton
            onPress={() => this.openMap()}
            icon={
              <FontAwesome5
                name="globe-americas"
                size={18}
                solid
                style={{
                  marginRight: 10,
                  color: '#ffffff',
                }}
              />
            }
            title={I18n.t('select_address_in_map')}
            style={{
              buttonStyle: {
                width: 170,
                backgroundColor: '#1E1E1E',
                borderRadius: 99 * 9,
                alignSelf: 'center',
                marginBottom: 20,
              },
              titleStyle: {
                fontSize: 10,
              },
            }}
          />
          <SplashButton
            onPress={() => this.handleSubmit()}
            title={I18n.t('confirm')}
            style={{
              buttonStyle: {
                width: 150,
                backgroundColor: '#1E1E1E',
                borderRadius: 99 * 9,
                alignSelf: 'center',
              },
            }}
          />
        </Group>
      </ScrollContainer>
    )
  }
}

PaymentInformation.propTypes = {}

const styles = {
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#1E1E1E',
  },
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = state => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInformation)
