import React, { Component } from 'react'
import { Group, Details, SplashButton } from 'components'
import { Picker, Dimensions } from 'react-native'

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
            onValueChange={itemValue => this.setState({ manufacturingYear: itemValue })
            }
          >
            {manufacturingYears.map(year => <Picker.Item {...year} />)}
          </Picker>
          <Details text="Vehicle Model" style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }} />
          <Picker
            selectedValue={vehicleModel}
            style={{
              marginBottom: 20, height: 50, width: screen.width - 40, backgroundColor: '#FFF', borderRadius: 15, alignSelf: 'center',
            }}
            onValueChange={itemValue => this.setState({ vehicleModel: itemValue })
            }
          >
            {vehicleModels.map(model => <Picker.Item {...model} />)}
          </Picker>
          <Details text="Body Number" style={{ marginHorizontal: 0, marginBottom: 5, color: '#1E1E1E' }} />
          <Picker
            selectedValue={bodyNumber}
            style={{
              marginBottom: 20, height: 50, width: screen.width - 40, backgroundColor: '#FFF', borderRadius: 15, alignSelf: 'center',
            }}
            onValueChange={itemValue => this.setState({ bodyNumber: itemValue })
            }
          >
            {bodyNumbers.map(number => <Picker.Item {...number} />)}
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

export default DetailsOfYourCar
