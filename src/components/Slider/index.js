import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Group, Logo, Details, Dot, ActiveDot,
} from 'components'
import Swiper from 'react-native-swiper'
import logo from 'assets/intro_01_pplopc.png'


export const Slider = ({ navigate }) => (
  <Swiper
    style={styles.wrapper}
    loop={false}
    dot={<Dot />}
    activeDot={<ActiveDot />}
    onIndexChanged={(index) => {
      if (index === 3) { navigate('Login') }
    }}
  >
    <Group style={styles.slide1}>

      <Logo
        source={logo}
        style={{
          marginTop: 0,
        }}
        containerStyle={{
          marginTop: 0,
        }}
      />

      <Details
        text="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s"
        style={{
          color: 'black',
          marginBottom: 10,

        }}
      />
    </Group>

    <Group style={styles.slide2}>

      <Logo
        source={logo}
        style={{
          width: '100%',
          height: 560,
        }}
      />

      <Details
        text="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s"
        style={{
          color: 'black',
          marginTop: 25,


        }}
      />
    </Group>
    <Group style={styles.slide3}>

      <Logo
        source={logo}
        style={{
          width: '100%',
          height: 560,
        }}
      />

      <Details
        text="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s"
        style={{
          color: 'black',


        }}
      />
    </Group>
    <Group style={styles.slide4}>

      <Logo
        source={logo}
        style={{
          width: '100%',
          height: 560,
        }}
      />

      <Details
        text="Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s"
        style={{
          color: 'black',
          marginTop: 25,


        }}
      />
    </Group>
  </Swiper>
)
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
