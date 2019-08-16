import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native-elements'

import { Group } from '../Group'

class SelectLogo extends Component {
  render() {
    const { options } = this.props
    return (
      <Group>
        <ScrollView horizontal>
          {options && options.map(({ source }) => (
            <Group
              style={{
                backgroundColor: '#1E1E1E',
                borderRadius: 99 ** 9,
                padding: 5,
                height: 70,
                width: 70,
                marginHorizontal: 10,
              }}
            >
              <Image style={{ width: 60, height: 60, resizeModa: 'contain' }} source={source} />
            </Group>
          ))}
        </ScrollView>
      </Group>
    )
  }
}

SelectLogo.propTypes = {

}

export default SelectLogo
