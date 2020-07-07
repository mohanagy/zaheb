import React, { Component } from 'react'
import { ActivityIndicator, ScrollView ,Dimensions} from 'react-native'

import { Group, CurvedHeader, Details,Title } from 'components'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as generalActions from 'actions/general'
import PropTypes from 'prop-types'
import I18n from '../../utilites/i18n'

const screen = Dimensions.get('screen')

class TermsAndConditions extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: I18n.t('terms_and_conditions'),
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
      />
    ),
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
      />
    ),
  });

  componentDidMount = async () => {
    const {
      actions: { getTermsAndConditions },
    } = this.props
    await getTermsAndConditions()
  };

  render() {
    const {
      generalData: { terms, isFetching },
    } = this.props

    if (isFetching) {
      return (
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
      )
    }
    return (
      <Group style={{ backgroundColor: '#F6F6F6' }}>
        <CurvedHeader  />
        <Group
          style={{
            alignSelf: 'center',
            bottom: 45,
            position: 'relative',
            backgroundColor: '#FFF',
            borderRadius: 200,
            shadowColor: '#BF1E1E1E',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
            paddingHorizontal: 25,
          }}
        >
          <Title
            text={I18n.t('terms_and_conditions')}
            style={{
              color: '#000',
              textAlignVertical: 'center',
              marginBottom: 8,
              fontSize:screen.width > 600 ? 18 : 10,
            }}
          />
        </Group>
        <ScrollView
          style={{
            height: '100%',
          }}
        >
          {terms.map(
            ({ en_description, en_title, ar_title, ar_description }) => (
              <Group style={{ marginTop: 40, marginHorizontal: 20 }}>
                <Details
                  text={
                    I18n.locale === 'ar'
                      ? ar_description || en_description
                      : en_description
                  }
                  style={{ color: '#1A2960', fontSize: 16 }}
                />
              </Group>
            )
          )}
        </ScrollView>
      </Group>
    )
  }
}

TermsAndConditions.propTypes = {}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...generalActions }, dispatch),
})

const mapStateToProps = state => ({
  generalData: state.generalData,
})

TermsAndConditions.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions)
