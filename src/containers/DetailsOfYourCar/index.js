import React, { Component } from 'react'
import { Group, Details, SplashButton } from 'components'
import { Picker, Dimensions } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

const screen = Dimensions.get('screen')

const manufacturingYears = [
  { label: '2018', value: '2018' },
  { label: '2019', value: '2019' },
  { label: '2020', value: '2020' },
]

const vehicleModels = [
  { label: 'AYCO', value: 'AYCO' },
  { label: 'DKIR', value: 'DKIR' },
  { label: 'SKIR', value: 'SKIR' },
  { label: 'MMKI', value: 'MMKI' },
  { label: 'PIER', value: 'PIER' },
]

const bodyNumbers = [
  { label: 'KSIRQQ', value: 'KSIRQQ' },
  { label: 'MMMIFS', value: 'MMMIFS' },
  { label: 'WEUYDS', value: 'WEUYDS' },
  { label: 'MMDJEU', value: 'MMDJEU' },
  { label: 'DKIERM', value: 'DKIERM' },
]

class DetailsOfYourCar extends Component {
  state = {
    manufacturingYear: manufacturingYears[0],
    vehicleModel: vehicleModels[0],
    bodyNumber: bodyNumbers[0],
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Details of your car',
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

  render() {
    const { vehicleModel, manufacturingYear, bodyNumber } = this.state
    return (
      <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height }}>
        <Group style={{ alignItems: 'flex-start', marginHorizontal: 20, marginTop: 40 }}>
          <Details text="Manufacturing Year" style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }} />
          <Picker
            selectedValue={manufacturingYear}
            style={{
              marginBottom: 20, height: 50, width: screen.width - 40, backgroundColor: '#FFF', borderRadius: 15, alignSelf: 'center',
            }}
            onValueChange={(itemValue) => this.setState({ manufacturingYear: itemValue })}
          >
            {manufacturingYears.map((year) => <Picker.Item {...year} />)}
          </Picker>
          <Details text="Vehicle Model" style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }} />
          <Picker
            selectedValue={vehicleModel}
            style={{
              marginBottom: 20, height: 50, width: screen.width - 40, backgroundColor: '#FFF', borderRadius: 15, alignSelf: 'center',
            }}
            onValueChange={(itemValue) => this.setState({ vehicleModel: itemValue })}
          >
            {vehicleModels.map((model) => <Picker.Item {...model} />)}
          </Picker>
          <Details text="Body Number" style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }} />
          <Picker
            selectedValue={bodyNumber}
            style={{
              marginBottom: 20, height: 50, width: screen.width - 40, backgroundColor: '#FFF', borderRadius: 15, alignSelf: 'center',
            }}
            onValueChange={(itemValue) => this.setState({ bodyNumber: itemValue })}
          >
            {bodyNumbers.map((number) => <Picker.Item {...number} />)}
          </Picker>
          <SplashButton
            title="Next"
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
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  common: state.common,
  userData:state.userData,
})

DetailsOfYourCar.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsOfYourCar)
