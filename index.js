/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry, I18nManager } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
// import { firebaseApp } from  './firebase'

I18nManager.forceRTL(false)
console.disableYellowBox = true
AppRegistry.registerComponent(appName, () => App)
