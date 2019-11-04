import React, { Component } from 'react'
import { Dimensions, Switch } from 'react-native'
import { AirbnbRating } from 'react-native-elements'

import {
  Group, CurvedHeader, Details, Tabs, LabeledInput, ScrollContainer, SelectLogo,
} from 'components'
import logo from '../../assets/logo.png'

const screen = Dimensions.get('screen')

const UserTab = ({ values, onStatusChange }) => (
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
    <Group style={{ alignSelf: 'flex-start' }}>
      <Details text="Status:" style={{ color: '#1E1E1E', fontWeight: '100' }} />
      <Switch value={values.status} onChange={onStatusChange} />
    </Group>
  </Group>
)

const MapTab = () => (
  <Group style={{ alignItems: 'flex-start' }}>
  </Group>
)

const CommentsTab = () => (
  <Group style={{ alignItems: 'flex-start' }}>
  </Group>
)

class ProfileDriver extends Component {
  static navigationOptions = {
    header: null,
  };

  state = { values: { status: false } }

  onStatusChange = () => {
    this.setState((state) => ({ ...state, values: { ...state.values, status: !state.values.status } }))
  }

  render() {
    const { values } = this.state
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
              defaultActiveTab="user"
              options={[
                { icon: 'user', key: 'user', activeContent: () => <UserTab values={values} onStatusChange={this.onStatusChange} /> },
                { icon: 'map-marker', key: 'map', activeContent: MapTab },
                { icon: 'comment', key: 'comments', activeContent: CommentsTab },
              ]}
              tabsWrapperStyle={{ marginHorizontal: (screen.width / 2) - 120 }}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

ProfileDriver.propTypes = {
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

export default ProfileDriver
