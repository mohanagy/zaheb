import React from 'react'
import { StyleSheet, Dimensions,Image } from 'react-native'
import {
  Group, Details, Dot, ActiveDot,
} from 'components'
import Swiper from 'react-native-swiper'
import logo from 'assets/splashMareen.png'

const screen = Dimensions.get('screen')

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
    <Group
      style={{
        alignItems:'center',
      }}
    >
      <Image
        source={logo}
        style={{
          alignSelf:'center',
          justifyContent:'center',
          resizeMode:'stretch',
          height:screen.height / 1.3,
          width:screen.width,

        }}

      />
      <Details
        text="Screen 1"
        style={{
          color: 'black',
          margin: 0,
          marginHorizontal:0,
          alignSelf: 'flex-end',
          backgroundColor:'white',
          width:'100%',
        }}
      />
    </Group>
    <Group
      style={{
        alignItems:'center',
      }}
    >
      <Image
        source={logo}
        style={{
          alignSelf:'center',
          justifyContent:'center',
          resizeMode:'stretch',
          height:screen.height / 1.3,
          width:screen.width,

        }}

      />
      <Details
        text="Screen 2"
        style={{
          color: 'black',
          margin: 0,
          marginHorizontal:0,
          alignSelf: 'flex-end',
          backgroundColor:'white',
          width:'100%',
        }}
      />
    </Group>
    <Group
      style={{
        alignItems:'center',
      }}
    >
      <Image
        source={logo}
        style={{
          alignSelf:'center',
          justifyContent:'center',
          resizeMode:'stretch',
          height:screen.height / 1.3,
          width:screen.width,

        }}

      />
      <Details
        text="Screen 3"
        style={{
          color: 'black',
          margin: 0,
          marginHorizontal:0,
          alignSelf: 'flex-end',
          backgroundColor:'white',
          width:'100%',
        }}
      />
    </Group>
    <Group
      style={{
        alignItems:'center',
      }}
    >
      <Image
        source={logo}
        style={{
          alignSelf:'center',
          justifyContent:'center',
          resizeMode:'stretch',
          height:screen.height / 1.3,
          width:screen.width,

        }}

      />
      <Details
        text="Screen 4"
        style={{
          color: 'black',
          margin: 0,
          marginHorizontal:0,
          alignSelf: 'flex-end',
          backgroundColor:'white',
          width:'100%',
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
    justifyContent: 'center',
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
