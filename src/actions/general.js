
import API from 'api'
import * as actionsTypes from './actionTypes'
const { api } = API


export function startGeneralFetching() {
  return {
    type: actionsTypes.START_GENERAL_FETCHING,
    payload: { isFetching: true },
  }
}
export function finishGeneralFetching() {
  return {
    type: actionsTypes.FINISH_GENERAL_FETCHING,
    payload: { isFetching: false },
  }
}

export function getDataSuccess(data) {
  return {
    type: actionsTypes.GET_GENERAL_DATA_SUCCESS,
    payload: { ...data },
  }
}
export function errorHappened(alert) {
  return {
    type: actionsTypes.SHOW_ALERT,
    payload: { alert },
  }
}

export const alertWithType = (type, title, message) => ({
  type: actionsTypes.SHOW_ALERT,
  payload: { alert: { type, title, message } },
})
export const resetAlert = () => ({
  type: actionsTypes.RESET_ALERT,
})

export const getWhoWeAre = () => async (dispatch, getState) => {
  dispatch(startGeneralFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(api.getWhoWeAre, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, whoWeAre } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }

    return dispatch(getDataSuccess({ whoWeAre }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishGeneralFetching())
  }
}
export const getContactUs = () => async (dispatch, getState) => {
  dispatch(startGeneralFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(api.getContactUs, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, contactData:contactUs } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }

    return dispatch(getDataSuccess({ contactUs }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishGeneralFetching())
  }
}
export const getTermsAndConditions = () => async (dispatch, getState) => {
  dispatch(startGeneralFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(api.getTerms, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, termsConditions  } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }

    return dispatch(getDataSuccess({ terms:termsConditions }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishGeneralFetching())
  }
}
export const getNotifications = () => async (dispatch, getState) => {
  dispatch(startGeneralFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(api.getNotifications, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, notification } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    dispatch(getDataSuccess({ notifications:notification }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishGeneralFetching())
  }
}
export const selectCar = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedCarId: id }))
}
export const selectService = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedServiceId: id }))
}
export const selectWorkShop = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedWorkShopId: id }))
}
