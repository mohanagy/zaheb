import React from 'react'
import { Text } from 'react-native'
import profilePic from 'assets/profilePic.png'
import LinearGradient from 'react-native-linear-gradient'
import { ProfileAvatar, Group } from 'components'
export const Header = (props) => (
  <LinearGradient
    colors={['#0092c9', '#ffffff']}
    start={{ x: 0, y: -1 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: '30%',
      flexDirection: 'column',
      padding: 0,


    }}
  >
    <Group
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
      }}
    >

      <ProfileAvatar
        size="xlarge"
        source={profilePic}
        style={{
          containerStyle: {
            marginBottom: 0,
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
          fontFamily: 'HelveticaNeueW23forSKY-Bd',
          fontSize: 16,
          alignSelf: 'center',
        }}
      >
        مصطفى محمد

      </Text>
    </Group>
  </LinearGradient>

)

Header.propTypes = {
}
Header.defaultProps = {
  loading: false,
  type: 'solid',
}
export default Header
