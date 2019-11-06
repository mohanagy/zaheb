import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import {
  Logo, Group, ScrollContainer, BackgroundImageWrapper,
} from 'components'
import logo from 'assets/logo.png'

const screen = Dimensions.get('screen')

export class SimpleForm extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      children,
      after,
      backgroundSource,
      backgroundOverlay,
    } = this.props
    return (
      <BackgroundImageWrapper source={backgroundSource} style={{ height: '100%' }}>
        <Group
          style={{
            backgroundColor: backgroundOverlay,
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <ScrollContainer
          contentContainerStyle={{
            marginTop: 15,
            marginBottom: 0,
            paddingBottom: 0,
            justifyContent: 'center',
            minHeight: screen.height - 100
          }}
        >
          <Group>
            <Group
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 99999,
                borderTopRightRadius: 99999,
                backgroundColor: '#FFFFFF',
                width: screen.width * 0.5,
                marginBottom: -70,
                marginTop: screen.height * 0.20,
              }}
            >
              <Logo
                source={logo}
                style={{
                  width: screen.width * 0.5,
                  resizeMode: 'contain',
                }}
                containerStyle={{
                  marginTop: -40,
                }}
              />
            </Group>
            {children}
          </Group>
          {after}
        </ScrollContainer>
      </BackgroundImageWrapper>
    )
  }
}

SimpleForm.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.array]),
  after: PropTypes.oneOf([PropTypes.node, PropTypes.array]),
  backgroundSource: PropTypes.string.isRequired,
  backgroundOverlay: PropTypes.string,
}

SimpleForm.defaultProps = {
  children: [],
  after: [],
  backgroundOverlay: '#00000000',
}
