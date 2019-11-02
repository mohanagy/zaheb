import React from 'react'
import AppContainer from 'navigation'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Alert } from 'components'
import store from './src/store'

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Alert>
        <AppContainer />
      </Alert>
    </SafeAreaProvider>
  </Provider>

)

export default App
