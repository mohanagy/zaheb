import React, { Component } from 'react'
import {
  Group, Details, CurvedHeader, LabeledInputWithIcon, ScrollContainer,
} from 'components'
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import man from '../../assets/man.png'

const screen = Dimensions.get('screen')

const profile = {
  id: '006641',
  username: 'Ahmed Saftawai',
  password: 'password1',
  phoneNumber: '00972 5758564852',
  location: {
    country: 'Palestine',
    city: 'Gaza',
  },
  email: 'example@domain.com',
  language: 'English',
}

class Profile extends Component {
  render() {
    return (
      <ScrollContainer>
        <Group style={{ backgroundColor: '#F6F6F6', minHeight: screen.height, paddingBottom: 50 }}>
          <Group>
            <CurvedHeader type="image" source={man} fillSource />
          </Group>
          <Details text={profile.username} style={{ color: 'black' }} />
          <Details text={`No.${profile.id}`} style={{ color: 'black' }} />
          <Details text={`${profile.location.city} ${profile.location.country}`} style={{ color: 'black', fontSize: 10 }} />
          <Group>
            <Details text="Private Details" style={{ alignSelf: 'flex-start', color: '#1E1E1E' }} />
            <LabeledInputWithIcon
              label="Name"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: profile.username,
              }}
            />
            <LabeledInputWithIcon
              label="Email"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: profile.email,
              }}
            />
            <LabeledInputWithIcon
              label="Password"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                secureTextEntry: true,
                style: styles.inputStyle,
                value: profile.password,
              }}
            />
            <LabeledInputWithIcon
              label="Mobile Number"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: profile.phoneNumber,
              }}
            />
            <LabeledInputWithIcon
              label="Location"
              labelStyle={styles.inputLabelStyle}
              icon="plus"
              inputProps={{
                style: styles.inputStyle,
                value: profile.location.city,
              }}
            />
            <LabeledInputWithIcon
              label="Language"
              labelStyle={styles.inputLabelStyle}
              icon="edit"
              inputProps={{
                style: styles.inputStyle,
                value: profile.language,
              }}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

const styles = {
  inputLabelStyle: { color: '#1E1E1E', alignSelf: 'flex-start', fontWeight: '100' },
  inputStyle: {
    backgroundColor: '#FFF', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, width: screen.width - 80,
  },
}

export default Profile
