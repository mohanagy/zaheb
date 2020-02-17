import { Platform } from 'react-native'
import firebase from '@react-native-firebase/app'

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
  clientId: '932925684697-43c6ame8pheqrkb57u65nqj7v66i79gv.apps.googleusercontent.com',
  appId: '1:932925684697:android:c013894a104d75952c37c8',
  apiKey: 'AIzaSyCNo8Tk03dfaRVSBuBwKqrOHXoljWlKha0',
  databaseURL: 'x',
  storageBucket: 'alam-maren.appspot.com',
  messagingSenderId: '932925684697',
  projectId: 'alam-maren',

  // enable persistence by adding the below flag
  persistence: true,
}

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
  clientId: 'x',
  appId: 'x',
  apiKey: 'x',
  databaseURL: 'x',
  storageBucket: 'x',
  messagingSenderId: 'x',
  projectId: 'x',

  // enable persistence by adding the below flag
  persistence: true,
}

export const firebaseApp = firebase
  .initializeApp(
    // use platform-specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'maren',
  )
  .then((app) => console.log('initialized apps ->', firebase.apps))
