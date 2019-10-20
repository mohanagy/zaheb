import React from 'react'
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { ScrollView, Text, StyleSheet } from 'react-native'
import { ProfileAvatar } from 'components'
import { Divider } from 'react-native-elements'

import profilePic from 'assets/profilePic.png'

export const Drawer = props => (
  <ScrollView style={{ filter: 'blur(5)' }}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <ProfileAvatar
        size="large"
        source={profilePic}
        style={{
          containerStyle: {
            marginBottom: 0,
            marginTop: 10,
            marginLeft: 20,
          },
          avatarStyle: {
            margin: 0,
            padding: 0,
            height: 10,
          },
        }}
        rounded
        title="MT"
        activeOpacity={0.7}
      />
      <Text
        style={{
          marginLeft: 20,

        }}
      >
Johan Doe
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


      <DrawerNavigatorItems {...props} />
      <Divider style={{ backgroundColor: 'black' }} />
      <Text
        style={{
          marginLeft: 20,

        }}
      >
Sign out

      </Text>
    </SafeAreaView>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
