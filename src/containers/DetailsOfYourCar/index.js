import React, { Component } from 'react'
import { Group, Details, SplashButton } from 'components'
import { Dimensions, ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RNPickerSelect from 'react-native-picker-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class DetailsOfYourCar extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('details_of_your_car'),
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
    manufacturingYear: null,
    vehicleModel: null,
  };

  componentDidMount = async () => {
    const {
      actions: { getCarManufacturingYears, getCarModels },
      storeData: { selectedCarId },
    } = this.props
    await getCarManufacturingYears(selectedCarId)
    await getCarModels(selectedCarId)
    const {
      storeData: { models, manufacturingYears },
    } = this.props
    if (manufacturingYears[0]) {
      this.setState({
        manufacturingYear: manufacturingYears[0].id,
      })
    }
    if (models[0]) {
      this.setState({
        vehicleModel: models[0].id,
      })
    }
  };

  handleNextButton = async (manufacturingYear, vehicleModel) => {
    const {
      actions: { setFilters },
      navigation: { navigate },
      storeData: { selectedProductId },
    } = this.props
    await setFilters({ manufacturingYear, vehicleModel, selectedProductId })
    navigate('Products')
  };

  render() {
    const {
      storeData: { models, manufacturingYears, isFetching },
    } = this.props
    const { manufacturingYear, vehicleModel } = this.state
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
          }}
        >
          <ActivityIndicator size="large" />
        </Group>
      )
    }
    return (
      <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
        <Group
          style={{
            alignItems: 'flex-start',
            marginHorizontal: 20,
            marginTop: 40,
          }}
        >
          <Details
            text={I18n.t('manufacturing_year')}
            style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }}
          />
          <RNPickerSelect
            selectedValue={manufacturingYear}
            style={{
              inputIOS: {
                marginBottom: 20,
                height: 50,
                width: screen.width - 40,
                backgroundColor: '#FFF',
                borderRadius: 15,
                alignSelf: 'center',
              },
              inputAndroid: {
                marginBottom: 20,
                height: 50,
                width: screen.width - 40,
                backgroundColor: '#FFF',
                borderRadius: 15,
                alignSelf: 'center',
              },
            }}
            onValueChange={itemValue =>
              this.setState({ manufacturingYear: itemValue })
            }
            items={manufacturingYears.map(({ year, id }) => ({
              label: year.toString(),
              value: id,
            }))}
          />
          <Details
            text={I18n.t('vehicle_model')}
            style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }}
          />
          <RNPickerSelect
            selectedValue={vehicleModel}
            style={{
              inputIOS: {
                marginBottom: 20,
                height: 50,
                width: screen.width - 40,
                backgroundColor: '#FFF',
                borderRadius: 15,
                alignSelf: 'center',
              },
              inputAndroid: {
                marginBottom: 20,
                height: 50,
                width: screen.width - 40,
                backgroundColor: '#FFF',
                borderRadius: 15,
                alignSelf: 'center',
              },
            }}
            onValueChange={itemValue =>
              this.setState({ vehicleModel: itemValue })
            }
            items={models.map(({ id, en_name, ar_name }) => ({
              value: id,
              label: I18n.locale === 'ar' ? ar_name || en_name : en_name,
            }))}
          />
          <SplashButton
            onPress={() =>
              this.handleNextButton(manufacturingYear, vehicleModel)
            }
            title={I18n.t('next')}
            style={{
              buttonStyle: {
                width: 150,
                backgroundColor: '#1E1E1E',
                borderRadius: 99 * 9,
              },
              containerStyle: {
                marginTop: 30,
                alignSelf: 'center',
              },
            }}
          />
        </Group>
      </Group>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...storeActions, ...usersActions }, dispatch),
})

const mapStateToProps = state => ({
  storeData: state.storeData,
  generalData: state.generalData,
  userData: state.userData,
})

DetailsOfYourCar.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOfYourCar)
