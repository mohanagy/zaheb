import I18n from 'i18n-js'
import ReactNative from 'react-native'
import * as RNLocalize from 'react-native-localize'

import en from '../../locales/en'
import ar from '../../locales/ar'

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageCode
  if (locales[0].languageCode === 'ar') {
    ReactNative.I18nManager.allowRTL(true)
    ReactNative.I18nManager.forceRTL(true)
  }
}

I18n.fallbacks = true
I18n.translations = {  en,  ar }

export default I18n
