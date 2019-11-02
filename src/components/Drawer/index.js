import React, { Component } from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { ProfileAvatar } from 'components'
import AsyncStorage from '@react-native-community/async-storage'
import { Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'


class Drawer extends Component {
  handleSignOut=async () => {
    const { navigation:{ navigate } } = this.props
    await AsyncStorage.removeItem('@user')
    await AsyncStorage.removeItem('@access_token')
    navigate('Login')
  }

  render() {
    const { userData:{ user:{ image,name } } } = this.props
    return (
      <ScrollView style={{ filter: 'blur(5)' }}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <ProfileAvatar
            size="large"
            source={{ uri:image }}
            style={{
              containerStyle: {
                marginBottom: 0,
                marginTop: 10,
                marginLeft: 20,
              },
              avatarStyle: {
                margin: 0,
                padding: 0,
              },
            }}
            rounded
            title={name}
            activeOpacity={0.7}
          />
          <Text
            style={{
              marginLeft: 20,

            }}
          >
            {name}
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />

          <Text
            style={{
              marginLeft: 20,
            }}
          >
Total Balance:$59.00
          </Text>
          <Divider style={{ backgroundColor: 'black' }} />


          <DrawerNavigatorItems {...this.props} />
          <Divider style={{ backgroundColor: 'black' }} />
          <Text
            style={{
              marginLeft: 20,

            }}
            onPress={() => this.handleSignOut()}
          >
Sign out

          </Text>
        </SafeAreaView>
      </ScrollView>
    ) }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

Drawer.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawer)
