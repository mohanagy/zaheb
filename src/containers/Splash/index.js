import React, { Component } from 'react'
import { Slider } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'actions/users'
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
})

const mapStateToProps = (state) => ({
  user: state.loginData,
  orders: state.orders,
  generalData:state.generalData,
})

Splash.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Splash)
