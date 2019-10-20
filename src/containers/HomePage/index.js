import React, { Component } from 'react'
import { Dimensions } from 'react-native'

import {
  Group, CurvedHeader, ScrollContainer, BackgroundImageWrapper, Details,
} from 'components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'
import background from '../../assets/blurred-background.png'

const screen = Dimensions.get('screen')

class HomePage extends Component {
 static navigationOptions = ({ navigation }) => ({
   headerTitle: 'Home',
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
       onPress={() => {}}
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
  const { actions:{ checkAuth } ,navigation:{ navigate },userData:{ accessToken } } = this.props
  const valid = await checkAuth(accessToken)
  if (!valid)navigate('Login')
}

render() {
  const { navigation: { navigate } } = this.props
  return (
    <ScrollContainer
      contentContainerStyle={{
        marginBottom: 0,
        paddingBottom: 0,
        justifyContent: 'flex-start',
      }}
    >
      <BackgroundImageWrapper source={background}>
        <Group
          style={{
            backgroundColor: '#ffffff91',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <Group style={{ minHeight: screen.height }}>
          <CurvedHeader style={{ marginBottom: 40 }} />
          <Group style={{ alignItems: 'center' }}>
            <Group
              style={{
                marginBottom: 15, backgroundColor: '#1E1E1E', borderRadius: 99 ** 9, padding: 20,
              }}
              onPress={() => navigate('HomeStore')}
            >
              <FontAwesome5 name="tools" size={55} style={{ color: '#FFF' }} onPress={() => navigate('HomeStore')} />
            </Group>
            <Details text="Maintenance Services" style={{ marginBottom: 20, color: '#1E1E1E', fontSize: 22 }} />
            <Group
              style={{
                marginBottom: 15, backgroundColor: '#1E1E1E', borderRadius: 99 ** 9, padding: 20,
              }}
              onPress={() => navigate('HomeStore')}
            >
              <FontAwesome5 name="store" size={55} style={{ color: '#FFF' }} />
            </Group>
            <Details text="Store" style={{ marginBottom: 20, color: '#1E1E1E', fontSize: 22 }} />
          </Group>
        </Group>
      </BackgroundImageWrapper>
    </ScrollContainer>
  )
}
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(usersActions,dispatch,),
})

const mapStateToProps = (state) => ({
  userData: state.userData,
  common: state.common,
})

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage)
