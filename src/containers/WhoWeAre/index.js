import React, { Component } from 'react'
import { Dimensions,ActivityIndicator } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import PropTypes from 'prop-types'
import {
  Group, CurvedHeader, Details,
} from 'components'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class WhoWeAre extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('who_are_we'),
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
        onPress={() => navigation.navigate('Notifications')}
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

  componentDidMount =async () => {
    const { actions:{ getWhoWeAre } } = this.props
    await getWhoWeAre()
  }

  render() {
    const {
      generalData:{
        whoWeAre:{
          value,
          ar_value,
        },
        isFetching,
      },
    } = this.props
    if (isFetching) { return (
      <Group
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </Group>
    ) }
    return (
      <Group style={{ backgroundColor: '#F6F6F6' }}>
        <CurvedHeader type="text" content={I18n.t('who_are_we')} />
        <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
          <Details text={I18n.locale === 'ar' ? ar_value || value : value } style={{ color: '#1A2960', fontSize: 16 }} />
        </Group>
      </Group>
    )
  }
}

WhoWeAre.propTypes = {
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...generalActions },dispatch),
})

const mapStateToProps = (state) => ({
  generalData: state.generalData,
})

WhoWeAre.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WhoWeAre)
