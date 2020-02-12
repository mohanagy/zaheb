import React, { Component } from 'react'
import { Dimensions,ActivityIndicator,ScrollView } from 'react-native'

import {
  Group, CurvedHeader, Details,Title,
} from 'components'
import { Divider } from 'react-native-elements'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import PropTypes from 'prop-types'


const screen = Dimensions.get('screen')

class TermsAndConditions extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Terms and Conditions',
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
    const { actions:{ getTermsAndConditions } } = this.props
    await getTermsAndConditions()
  }

  render() {
    const { generalData:{ terms ,isFetching } } = this.props

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
        <CurvedHeader type="text" content="Terms and Conditions" />
        <ScrollView
          style={{
            height:'100%',
          }}
        >

          {terms.map(({ en_description,en_title }) => (
            <Group style={{ marginTop: 40, marginHorizontal: 20 }}>
              <Title
                text={en_title}
                style={{
                  color: '#000',
                  textAlignVertical: 'center',
                  marginBottom: 8,
                  fontSize: 22,
                }}
              />
              <Divider style={{ backgroundColor: 'black' }} />

              <Details text={en_description} style={{ color: '#1A2960', fontSize: 16 }} />
              <Divider style={{ backgroundColor: 'black' }} />
            </Group>
          ))}
        </ScrollView>
      </Group>
    )
  }
}

TermsAndConditions.propTypes = {
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...generalActions },dispatch),
})

const mapStateToProps = (state) => ({
  generalData: state.generalData,
})

TermsAndConditions.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TermsAndConditions)
