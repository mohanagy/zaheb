import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'

class AlertProvider extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.type && nextProps.title && nextProps.message) {
      this.dropdown.alertWithType(nextProps.type, nextProps.title, nextProps.message)
    }
  }

  render() {
    const { children, actions: { resetAlert } } = this.props
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(children)}
        <DropdownAlert
          onClose={() => resetAlert()}
          defaultContainer={{
            paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
          }}
          ref={(ref) => {
            this.dropdown = ref
          }}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const { type, title, message } = state.generalData.alert
  return {
    type, title, message,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...generalActions }, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps)(AlertProvider)
