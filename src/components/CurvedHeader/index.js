import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'
import { Image } from 'react-native-elements'

import { Group, Title } from 'components'

const screen = Dimensions.get('screen')

export class CurvedHeader extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      type, content, source, style, fillSource,
    } = this.props
    return (
      <Group
        style={{
          height: screen.width * 0.3,
          flexDirection: 'column-reverse',
          marginBottom: type === 'image' ? 80 : 0,
          ...style,
        }}
      >
        <Group
          style={{
            position: 'absolute',
            top: screen.width * -2.7,
            left: screen.width * -1,
            width: screen.width * 3,
            height: screen.width * 3,
            backgroundColor: '#1e1e1e',
            borderRadius: 99 ** 9,
          }}
        />
        {
          type === 'text' ? (
            <Group
              style={{
                alignSelf: 'center',
                bottom: 25,
                position: 'relative',
                backgroundColor: '#FFF',
                borderRadius: 200,
                shadowColor: '#BF1E1E1E',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}
            >
              <Title
                text={content}
                style={{
                  color: '#000',
                  textAlignVertical: 'center',
                  marginBottom: 8,
                }}
              />
            </Group>
          ) : type === 'image' && (
            <Group
              style={{
                alignSelf: 'center',
                bottom: 70,
                width: 150,
                height: 150,
                position: 'relative',
                backgroundColor: '#FFF',
                borderRadius: 200,
                shadowColor: '#BF1E1E1E',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}
            >
              <Image
                source={source}
                containerStyle={{
                  width: fillSource ? 150 : 90,
                  height: fillSource ? 150 : 90,
                  margin: fillSource ? 0 : 25,
                  resizeMode: 'contain',
                  borderWidth: 0,
                  alignItems:'center',
                  justifyContent: 'center',
                  alignSelf:'center',
                  alignContent:'center',
                }}
              />
            </Group>
          )
        }
      </Group>
    )
  }
}

export default CurvedHeader
