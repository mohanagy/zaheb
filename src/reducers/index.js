
import { combineReducers } from 'redux'
import userData from './users'
import storeData from './store'
import generalData from './general'
export default combineReducers({ userData, storeData,generalData })
