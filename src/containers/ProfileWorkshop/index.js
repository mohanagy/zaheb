import React, { Component } from 'react'
import { Dimensions ,ActivityIndicator } from 'react-native'
import { AirbnbRating } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
  Group, CurvedHeader, Details, Tabs, LabeledInput, ScrollContainer, SelectLogo, InputField,
} from 'components'
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as storeActions from 'actions/store'
import * as usersActions from 'actions/users'
import PropTypes from 'prop-types'

import nissan from '../../assets/nissan-logo-64.png'
import bmw from '../../assets/bmw-logo-64.png'
import hyundai from '../../assets/hyundai-logo-64.png'
import mercedes from '../../assets/mercedes-logo-64.png'
import skoda from '../../assets/skoda-logo-64.png'

const screen = Dimensions.get('screen')

const WorkshopProfileTab = ({ workShopProfile }) => (
  <Group style={{ width: '100%', alignItems: 'stretch' }}>
    <Details
      text="Private details"
      style={{
        color: '#1E1E1E', marginHorizontal: 0, fontSize: 20, alignSelf: 'flex-start',
      }}
    />
    <LabeledInput
      disabled
      label="Name"
      placeholder={workShopProfile.name}
      {...styles.inputStyle}
    />
    <LabeledInput
      disabled
      label="Email"
      placeholder={workShopProfile.email}
      {...styles.inputStyle}
    />
    <LabeledInput
      disabled
      label="Adress"
      placeholder={workShopProfile.address}
      {...styles.inputStyle}
    />
    <LabeledInput
      disabled
      label="Mobile Number"
      placeholder={workShopProfile.phone}
      {...styles.inputStyle}
    />
  </Group>
)
const WorkshopTimesTab = ({ workShopProfile })  => (
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

const WorkshopSettingsTab = ({ workShopProfile })  => (
  <Group style={{ alignItems: 'flex-start', width: '100%' }}>
    <Details text="Service:" style={{ color: '#1E1E1E', fontSize: 22 }} />
    <Details text="Supplier" style={{ color: '#1E1E1E', fontSize: 18, fontWeight: '800' }} />
    <Details text="Sub Service:" style={{ color: '#1E1E1E', fontSize: 22 }} />
    <Group style={{ width: '100%' }}>
      <InputField disabled style={{ inputStyle: { ...styles.inputStyle.inputStyle, width: '100%' } }} />
      <InputField disabled style={{ inputStyle: { ...styles.inputStyle.inputStyle, width: '100%' } }} />
      <InputField disabled style={{ inputStyle: { ...styles.inputStyle.inputStyle, width: '100%' } }} />
    </Group>
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

class WorkshopSupplier extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Workshop Profile',
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
    const { actions:{ getWorkshopProfile },storeData:{ selectedWorkShopId } } = this.props
    await getWorkshopProfile(selectedWorkShopId)
  }

  handleChatIcon =async (id,name,image) => {
    const { actions:{ setSelectedConversation },navigation:{ navigate } } = this.props
    await  setSelectedConversation(id,name,image)
    navigate('Chat')
  }

  handleBooking= async (id) => {
    const { actions:{ selectWorkShop },navigation:{ navigate } } = this.props
    await selectWorkShop(id)
    navigate('NearestServiceCenter')
  }

  render() {
    const { storeData:{ isFetching ,workShopProfile } } = this.props
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
      <ScrollContainer
        contentContainerStyle={{
          marginBottom: 0,
          paddingBottom: 0,
          justifyContent: 'flex-start',
        }}
      >
        <Group style={{ backgroundColor: '#F6F6F6' }}>
          <CurvedHeader type="image" source={{ uri:workShopProfile.image }} />
          <Group style={{ marginTop: 40, marginHorizontal: 20, minHeight: screen.height }}>
            <Details text={workShopProfile.name} style={{ color: '#1A2960', fontSize: 18 }} />
            <Details text={workShopProfile.number} style={{ color: '#1A2960', fontSize: 16 }} />
            <Details text={workShopProfile.address} style={{ color: '#1A2960', fontSize: 12 }} />
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={Math.random() * 4 + 1}
              size={10}
            />
            <Tabs
              workShopProfile={workShopProfile}
              defaultActiveTab="user"
              options={[
                { icon: 'user', key: 'user', activeContent: WorkshopProfileTab },
                { icon: 'clock', key: 'clock', activeContent: WorkshopTimesTab },
                { icon: 'cog', key: 'settings', activeContent: WorkshopSettingsTab },
                { icon: 'comment', key: 'comment',handleChatIcon:(id,name,image) => this.handleChatIcon(id,name,image) },
                { icon: 'calendar-check', key: 'calendar-check', handleBooking:(id) => this.handleBooking(id) },
              ]}
            />
          </Group>
        </Group>
      </ScrollContainer>
    )
  }
}

WorkshopSupplier.propTypes = {
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

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...storeActions,...usersActions },dispatch),
})

const mapStateToProps = (state) => ({
  storeData: state.storeData,
  generalData:state.generalData,
  userData:state.userData,
})

WorkshopSupplier.propTypes = {
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkshopSupplier)
