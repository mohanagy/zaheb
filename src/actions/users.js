import AsyncStorage from '@react-native-community/async-storage'

import API from 'api'
import {} from './store'
import * as actionsTypes from './actionTypes'
const { api } = API


export function startUserFetching() {
  return {
    type: actionsTypes.START_USER_FETCHING,
    payload: { isFetching: true },
  }
}
export function finishUserFetching() {
  return {
    type: actionsTypes.FINISH_USER_FETCHING,
    payload: { isFetching: false },
  }
}

export function getDataSuccess(data) {
  return {
    type: actionsTypes.GET_USER_DATA_SUCCESS,
    payload: { ...data },
  }
}
export function errorHappened(alert) {
  return {
    type: actionsTypes.SHOW_ALERT,
    payload: { alert },
  }
}

export function updateUserData(data) {
  return {
    type:actionsTypes.UPDATE_USER_DATA,
    payload:data,
  }
}
export function sendNewMessage(data) {
  return {
    type:actionsTypes.SEND_NEW_MESSAGE,
    payload:data,
  }
}

export const login = ({ email, password }) => async (dispatch) => {
  const data = new FormData()
  data.append('emailOrUsername', email)
  data.append('password', password)

  dispatch(startUserFetching())
  try {
    const response = await fetch(api.userLogin, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',

      },
      body: data,
    })
    const json = await response.json()
    const { error } = json
    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    const { access_token: accessToken, user } = json
    await AsyncStorage.setItem('@user', JSON.stringify({ user }))
    await AsyncStorage.setItem('@access_token', accessToken)
    dispatch(getDataSuccess({ user ,accessToken }))
    return user
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishUserFetching())
  }
}

export const updateUserStore = (user) => async (dispatch) => dispatch(getDataSuccess(user))

export const checkAuth = (accessToken) => async (dispatch, getState) => {
  const response = await fetch(api.getCars, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const json = await response.json()
  const { error } = json

  if (error) {
    return false
  }
  return true
}

export const getUserProfile =  () =>  async (dispatch,getState) => {
  dispatch(startUserFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(api.getUserProfile, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  user } = json
    await AsyncStorage.setItem('@user', JSON.stringify({ user }))

    dispatch(updateUserData(user))
    return user
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishUserFetching())
  }
}


export const updateProfile =  (field,value) => async (dispatch,getState) => {
  try {
    const data = new FormData()
    data.append(field, value)
    dispatch(startUserFetching())
    const { userData: { accessToken } } = getState()

    const response = await fetch(`${api.updateProfile}${field}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
      body: data,
    })
    const json = await response.json()
    const { status } = json

    if (!status) { dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
    }

    dispatch(getUserProfile())
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishUserFetching())
  }
}
export const getConversations =  () =>  async (dispatch,getState) => {
  dispatch(startUserFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(api.getConversations, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  conversations } = json
    dispatch(getDataSuccess({ conversations }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishUserFetching())
  }
}
export const getConversationByReceiverId =  (id) =>  async (dispatch,getState) => {
  dispatch(startUserFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getConversationByReceiverId}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  conversation } = json
    dispatch(getDataSuccess({ conversation }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishUserFetching())
  }
}
export const sendConversationMessage =  (receiverId,message) =>  async (dispatch,getState) => {
  dispatch(startUserFetching())
  try {
    const data = new FormData()
    data.append('message', message)
    const { userData: { accessToken } } = getState()
    await fetch(`${api.sendConversationMessage}${receiverId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',

      },
      body:data,
    })
    dispatch(getConversationByReceiverId(receiverId))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishUserFetching())
  }
}
export const setSelectedConversation = (id,name,image) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedReceiver: { id,name ,image } }))
}
