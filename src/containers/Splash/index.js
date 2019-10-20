import React, { Component } from 'react'
import { Slider } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
import { navigate } from 'actions/navigationActions'
import PropTypes from 'prop-types'
class Splash extends Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    const { navigation:{ navigate } } = this.props
    return (
      <Slider navigate={navigate} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions,dispatch),
  navigate:navigate(dispatch),
})

const mapStateToProps = (state) => ({
  user: state.loginData,
  orders: state.orders,
  common: state.common,
})

Splash.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash)
