import React, { Component } from 'react'
import { Dimensions ,KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import {
  Group, ScrollContainer, BackgroundImageWrapper,
} from 'components'

const screen = Dimensions.get('screen')

export class SimpleForm extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      children,
      backgroundSource,
      backgroundOverlay,
      after,
    } = this.props
    return (
      <BackgroundImageWrapper
        source={backgroundSource}
        style={{
          height:screen.height ,
          width:screen.width,
        }}
      >
        <Group
          style={{
            backgroundColor: backgroundOverlay,
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height:screen.height,
            width:screen.width,
          }}
        />
        <KeyboardAvoidingView

          behavior="padding"
          keyboardVerticalOffset={1}

        >

          <ScrollContainer
            contentContainerStyle={{
              height:screen.height ,
              justifyContent: 'center',
              marginTop:10,

            }}
          >
            {children}
            {after}
          </ScrollContainer>
        </KeyboardAvoidingView>
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
