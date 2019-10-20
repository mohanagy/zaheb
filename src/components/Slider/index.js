import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import {
  Group, Logo, Details, Dot, ActiveDot,
} from 'components'
import Swiper from 'react-native-swiper'
import logo from 'assets/intro_01-min.png'

const screen = Dimensions.get('screen')

export const Slider = ({ navigate }) => (
  <Swiper
    style={styles.wrapper}
    loop={false}
    dot={<Dot />}
    activeDot={<ActiveDot />}
    onIndexChanged={(index) => {
      console.log({
        index,
        navigate,
      })
      if (index === 3) { navigate('Login') }
    }}
  >
    <Group
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: screen.height - 150,
        width: screen.width,
      }}
    >
      <Logo
        source={logo}
        style={{
          width: '100%',
          resizeMode: 'contain',
          height: screen.height - 100,
        }}
        containerStyle={{
          width: '100%',
          marginHorizontal: 50,
        }}
      />
      <Details
        text="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s"
        style={{
          color: 'black',
          marginBottom: 0,
          alignSelf: 'flex-end',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00ff00',
    height: 200,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
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
