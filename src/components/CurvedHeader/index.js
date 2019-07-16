import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native'

import { Group, Title } from 'components'

const screen = Dimensions.get('screen')

class CurvedHeader extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { type, content } = this.props
    return (
      <Group
        style={{
          height: screen.width * 0.3,
          flexDirection: 'column-reverse',
        }}
      >
        <Group
          style={{
            width: screen.width * 3,
            height: screen.width * 3,
            backgroundColor: '#1e1e1e',
            borderRadius: 99 ** 9,
            position: 'absolute',
            top: screen.width * -2.7,
            left: screen.width * -1,
          }}
        />
        {
          type === 'text' && (
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
          )
        }
      </Group>
    )
  }
}

const inputStyle = {
  fontFamily: 'HelveticaNeueW23forSKY-Reg',
  padding: 0,
  margin: 0,
}

const inputLabelStyle = {
  color: '#b0abab',
  marginLeft: 10,
}

const inputContainerStyle = {
  marginHorizontal: 18,
  marginTop: 20,
}
CurvedHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const buttonStyle = {
  buttonStyle: {
    backgroundColor: '#FF2334',
    borderRadius: 20,
    marginHorizontal: 50,
  },
  containerStyle: {
    position: 'absolute',
    bottom: -25,
    width: '100%',
    paddingHorizontal: 10,
  },
  titleStyle: {
    color: '#FFFFFF',
    fontWeight: '9',
    fontSize: 18,
    fontFamily: 'HelveticaNeueW23forSKY-Reg',
  },
}

export default CurvedHeader
