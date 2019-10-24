
import API from 'api'
import * as actionsTypes from './actionTypes'
const { api } = API


export function startStoreFetching() {
  return {
    type: actionsTypes.START_STORE_FETCHING,
    payload: { isFetching: true },
  }
}
export function finishStoreFetching() {
  return {
    type: actionsTypes.FINISH_STORE_FETCHING,
    payload: { isFetching: false },
  }
}

export function getDataSuccess(data) {
  return {
    type: actionsTypes.GET_STORE_DATA_SUCCESS,
    payload: { ...data },
  }
}
export function errorHappened(alert) {
  return {
    type: actionsTypes.SHOW_ALERT,
    payload: { alert },
  }
}


export const getCars = () => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(api.getCars, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, cars } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ cars }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
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

export const getWorkShopsByServiceId = (id) => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(`${api.getWorkshopsByServiceId}?service_id=${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, workshops } = json
    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ workshops }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getServicesByCarId = (id) => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(`${api.getServicesClassificationByCarTypeId}?car_id=${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, services } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ services }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyPurchases = () => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(`${api.getMyPurchases}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, product_orders:myPurchases = [] } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myPurchases }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyRequests = () => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(`${api.getMyRequests}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, orders:myRequests = [] } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myRequests }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}


export const getMyRequestedOffers =  () =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getMyRequestedOffers}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  offers } = json
    dispatch(getDataSuccess({ offers }))
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
    dispatch(finishStoreFetching())
  }
}
export const getMyOffers =  () =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getMyOffers}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  workshopOffers:myOffers } = json
    dispatch(getDataSuccess({ myOffers }))
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
    dispatch(finishStoreFetching())
  }
}
export const getMyFavorites =  () =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getMyFavorites}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  myFavourite:favorites } = json
    dispatch(getDataSuccess({ favorites }))
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
    dispatch(finishStoreFetching())
  }
}
export const cancelMyRequestedOffers =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.cancelMyRequestedOffers}${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
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
    dispatch(finishStoreFetching())
  }
}
