import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { AirbnbRating } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
  Group, CurvedHeader, Details, Tabs, LabeledInput, ScrollContainer, SelectLogo,
} from 'components'
import logo from '../../assets/logo.png'
import nissan from '../../assets/nissan-logo-64.png'
import bmw from '../../assets/bmw-logo-64.png'
import hyundai from '../../assets/hyundai-logo-64.png'
import mercedes from '../../assets/mercedes-logo-64.png'
import skoda from '../../assets/skoda-logo-64.png'

const screen = Dimensions.get('screen')

const ProfileUserTab = () => (
  <Group style={{ width: '100%', alignItems: 'stretch' }}>
    <Details
      text="Private details"
      style={{
        color: '#1E1E1E', marginHorizontal: 0, fontSize: 20, alignSelf: 'flex-start',
      }}
    />
    <LabeledInput
      label="Name"
      placeholder="Dream workshop"
      {...styles.inputStyle}
    />
    <LabeledInput
      label="Email"
      placeholder="username@domain.com"
      {...styles.inputStyle}
    />
    <LabeledInput
      label="Adress"
      placeholder="Dream workshop"
      {...styles.inputStyle}
    />
    <LabeledInput
      label="Mobile Number"
      placeholder="00972 5900000000"
      {...styles.inputStyle}
    />
  </Group>
)

const ProfileTimesTab = () => (
  <Group style={{ alignItems: 'flex-start' }}>
    <Details text="Work-days" style={{ color: '#1E1E1E', fontSize: 22, marginHorizontal: 0 }} />
    <Group
      style={{
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 15,
      }}
    >
      <FontAwesome5 name="calendar" size={20} />
      <Details style={{ color: '#1E1E1E', marginHorizontal: 5 }} text="From Sunday to Thursday" />
    </Group>
    <Details text="Work-hours" style={{ color: '#1E1E1E', fontSize: 22, marginHorizontal: 0 }} />
    <Group
      style={{
        flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 15,
      }}
    >
      <FontAwesome5 name="clock" size={20} />
      <Details style={{ color: '#1E1E1E', marginHorizontal: 5 }} text="10:00am - 07:00pm" />
    </Group>
  </Group>
)

const ProfileSupplierTab = () => (
  <Group style={{ alignItems: 'flex-start' }}>
    <Details text="Service:" style={{ color: '#1E1E1E', fontSize: 22 }} />
    <Details text="Supplier" style={{ color: '#1E1E1E', fontSize: 18, fontWeight: '800' }} />
    <Details text="Car Type:" style={{ color: '#1E1E1E', fontSize: 22 }} />
    <SelectLogo
      options={[
        { source: nissan },
        { source: bmw },
        { source: hyundai },
        { source: mercedes },
        { source: skoda },
      ]}
    />
  </Group>
)

class ProfileSupplier extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollContainer
        contentContainerStyle={{
          marginBottom: 0,
          paddingBottom: 0,
          justifyContent: 'flex-start',
        }}
      >
        <Group style={{ backgroundColor: '#F6F6F6' }}>
          <CurvedHeader type="image" source={logo} />
          <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
            <Details text="Dream workshop" style={{ color: '#1A2960', fontSize: 18 }} />
            <Details text="No. 006641" style={{ color: '#1A2960', fontSize: 16 }} />
            <Details text="Gaza, Palestine" style={{ color: '#1A2960', fontSize: 12 }} />
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={Math.random() * 4 + 1}
              size={10}
            />
            <Tabs
              defaultActiveTab="supplier"
              options={[
                { icon: 'user', key: 'user', activeContent: ProfileUserTab },
                { icon: 'clock', key: 'clock', activeContent: ProfileTimesTab },
                { icon: 'piggy-bank', key: 'supplier', activeContent: ProfileSupplierTab },
                { icon: 'comment', key: 'comment' },
                { icon: 'calendar-check', key: 'calendar-check' },
              ]}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

ProfileSupplier.propTypes = {
}

const styles = {
  inputStyle: {
    inputStyle: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      shadowColor: '#BF1E1E1E',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 3,
      marginBottom: 10,
    },
    labelStyle: {
      marginLeft: 10,
    },
  },
}

export default ProfileSupplier
