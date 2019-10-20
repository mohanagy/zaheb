import React from 'react'
import AppContainer from 'navigation'
import { Provider } from 'react-redux'
import store from './src/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
    <AppContainer />
    </SafeAreaProvider>
  </Provider>

)

export default App
