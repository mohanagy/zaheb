import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


export const BottomTab = () => (
  <LinearGradient
    colors={['#8a8a8a', '#1e1e1e']}
    start={{ x: 0, y: -1 }}
    end={{ x: 0, y: 1 }}
    style={{
      height: '30%',
      flexDirection: 'column',
      padding: 0,


    }}
  >
  </LinearGradient>
)
