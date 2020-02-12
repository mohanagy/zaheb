
import API from 'api'
import axios from 'axios'
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
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ cars }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
export const selectProduct = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedProductId: id }))
}
export const selectService = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedServiceId: id }))
}
export const selectWorkShop = (id) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedWorkShopId: id }))
}
export const setShippingDetails = (shippingDetails) => async (dispatch) => {
  dispatch(getDataSuccess({ shippingDetails }))
}
export const selectOfferId = (selectedMyOfferId) => async (dispatch) => {
  dispatch(getDataSuccess({ selectedMyOfferId }))
}
export const selectOrderId = (orderId) => async (dispatch) => {
  dispatch(getDataSuccess({ orderId }))
}
export const noConfirmationButton = (value) => async (dispatch) => {
  dispatch(getDataSuccess({ noButton:value }))
}
export const skippedWorkShop = (value) => async (dispatch) => {
  dispatch(getDataSuccess({ skippedWorkShop:value }))
}
export const fireError = (error) => async (dispatch) => {
  dispatch(errorHappened({
    type: 'error',
    title: 'Error',
    message: error,
  }))
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
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ workshops }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ services }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getProductsClassification = (id) => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken } } = getState()
  try {
    const response = await fetch(`${api.getProductsClassificationByCarTypeId}?car_id=${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, products } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ products }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myPurchases }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myRequests }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyAvailableOrders = () => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken,user:{ driver_type } } } = getState()
  try {
    const url = driver_type === 'supplier' ? api.getDriverActiveProductOrders : api.getDriverActiveServiceOrders
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, orders:myAvailableOrders } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myAvailableOrders }))
  } catch (e) {
    console.log({
      e,
    })
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  } finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyDriverOrders = () => async (dispatch, getState) => {
  dispatch(startStoreFetching())
  const { userData: { accessToken,user:{ driver_type } } } = getState()
  try {
    const url = driver_type === 'supplier' ? api.getDriverAcceptedProductOrder : api.getDriverAcceptedServiceOrder
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const { error, orders } = json

    if (error) {
      dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ myOrders:orders }))
  } catch (e) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const setOfferDetails =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { storeData: { offers } } = getState()
    const [offer] = offers.filter((row) => row.id === id)
    dispatch(getDataSuccess({ offer }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getWorkshopOffers =  () =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getWorkshopOffers}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  workshopOffers } = json
    dispatch(getDataSuccess({ workshopOffers }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
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
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyOrders =  () =>  async (dispatch,getState) => {
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
      title: 'Error',
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
      title: 'Error',
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
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const handleAcceptOrder =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken,user:{ driver_type } } } = getState()
    const url = driver_type === 'supplier' ? api.acceptProductOrder : api.acceptServiceOrder
    const response = await fetch(`${url}${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const handleCancelOrder =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken,user:{ driver_type } } } = getState()
    const url = driver_type === 'supplier' ? api.cancelProductOrder : api.cancelServiceOrder
    await fetch(`${url}${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}

export const createOrder =  (newOrder) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const data = new FormData()
    data.append('workshop_id', newOrder.workshop_id)
    data.append('service_id', newOrder.service_id)
    data.append('need_driver', newOrder.need_driver)
    data.append('service_time', newOrder.service_time)
    data.append('service_date', newOrder.service_date)
    data.append('description', newOrder.description)
    data.append('lat', newOrder.lat)
    data.append('lng', newOrder.lng)
    if (newOrder.video)data.append('video', { uri: newOrder.video, name: 'video.mp4', type: 'video/mp4' })
    if (newOrder.image)data.append('image',{ uri: newOrder.image, name: 'image.jpg', type: ' image/jpeg' })

    const { userData: { accessToken } } = getState()
    const response = await axios({
      url:api.createOrder,
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': '',
      },
      data,
    })
    const { data:result } = await response
    const { status,order } = result
    if (!status) { return dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    })) }
    const { id } = order
    dispatch(getDataSuccess({ orderId:id }))
    return  true
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const createOffer =  (newOrder) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const data = new FormData()
    data.append('service_id', newOrder.service_id)
    data.append('need_driver', newOrder.need_driver)
    data.append('service_time', newOrder.service_time)
    data.append('service_date', newOrder.service_date)
    data.append('description', newOrder.description)
    data.append('lat', newOrder.lat)
    data.append('lng', newOrder.lng)
    if (newOrder.video)data.append('video', { uri: newOrder.video, name: 'video.mp4', type: 'video/mp4' })
    if (newOrder.image)data.append('image',{ uri: newOrder.image, name: 'image.jpg', type: ' image/jpeg' })

    const { userData: { accessToken } } = getState()
    const response = await axios({
      url:api.createOffer,
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': '',
      },
      data,
    })
    const { data:result } = await response
    const { status,offer } = result
    if (!status) { return dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    })) }
    const { id } = offer
    dispatch(getDataSuccess({ orderId:id }))
    return  true
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}

export const getOrderById =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getOrderById}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  order } = json
    dispatch(getDataSuccess({ order }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getAvailableOrderById =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getDriverActiveProductOrderByProductOrderId}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  product_order:order } = json
    console.log({
      json,
    })
    dispatch(getDataSuccess({ order }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getMyOrderByOrderId =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getDriverActiveServiceOrderByServiceOrderId}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  order } = json
    dispatch(getDataSuccess({ order }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getProductOrderByOrderId =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getProductOrderByOrderId}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  product_order:product } = json

    dispatch(getDataSuccess({ product }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const changeOrderStatus =  (status) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()

    const response = await axios({
      url:`${api.changeOrderStatus}${status}`,
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data:{
        user_status:2,
      },
    })
    const { data:result } =  response
    const { status:statusResponse } = result

    if (!statusResponse) { dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
    }
    return true
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getCarManufacturingYears =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getCarManufacturingYears}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  manufacturingYears } = json

    dispatch(getDataSuccess({ manufacturingYears }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getCarModels =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getCarModels}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  models } = json
    dispatch(getDataSuccess({ models }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getWorkshopProfile =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()
    const response = await fetch(`${api.getWorkshopProfile}${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()

    const {  workshop:workShopProfile } = json
    dispatch(getDataSuccess({ workShopProfile }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getProductsByFilters =  (productsFilter) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken },storeData:{ selectedCarId } } = getState()
    const {
      product_classification_id,manufacturing_year_id,car_model_id,
    } = productsFilter


    const url = `${api.getProductsByFilters}?car_id=${selectedCarId}&product_classification_id=${product_classification_id}&manufacturing_year_id=${manufacturing_year_id}&car_model_id=${car_model_id}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()
    const {  products } = json

    dispatch(getDataSuccess({ filteredProducts:products }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const getProductByProductId =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()

    const url = `${api.getProductByProductId}${id}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const json = await response.json()

    const {  product } = json

    dispatch(getDataSuccess({ product }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const removeFavorite =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()

    const data = new FormData()
    data.append('product_id', Number(id))

    const url = `${api.removeFavourite}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body:data,
    })
    const json = await response.json()
    const {  msg } = json
    if (msg !== 'Product removed form your favourite') throw new Error(msg)
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: error.message,
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
export const addToFavorite =  (id) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const { userData: { accessToken } } = getState()

    const data = new FormData()
    data.append('product_id', Number(id))

    const url = `${api.addFavourite}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body:data,
    })
    const json = await response.json()
    const {  msg } = json

    if (msg !== 'Product Added To Your Favourite') throw new Error(msg)
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: error.message,
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}

export const setFilters = ({ manufacturingYear,vehicleModel,selectedProductId }) => async (dispatch) => {
  dispatch(getDataSuccess({
    productsFilter:{
      product_classification_id:selectedProductId,
      manufacturing_year_id:manufacturingYear,
      car_model_id:vehicleModel,
    },
  }))
}

export const placeOrder =  (newOrder) =>  async (dispatch,getState) => {
  dispatch(startStoreFetching())
  try {
    const data = new FormData()
    data.append('supplier_id', newOrder.supplier_id)
    data.append('product_id', newOrder.product_id)
    data.append('need_driver', newOrder.need_driver)
    data.append('payment_type', newOrder.payment_type)
    data.append('shipping_name', newOrder.shipping_name)
    data.append('shipping_city', newOrder.shipping_city)
    data.append('shipping_street', newOrder.shipping_street)
    data.append('shipping_phone', newOrder.shipping_phone)
    if (newOrder.lat)data.append('lat', newOrder.lat)
    if (newOrder.lng)data.append('lng', newOrder.lng)
    if (newOrder.payment_type === 3) {
      data.append('bank_name', newOrder.bank_name)
      data.append('account_number', newOrder.account_number)
      data.append('bank_attachment', {
        uri: newOrder.bank_attachment,
        name: 'bank_attachment.jpg',
        type: ' image/jpeg',
      })
    }

    const { userData: { accessToken } } = getState()
    const response = await axios({
      url:api.createProductOrder,
      method: 'post',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': '',
      },
      data,
    })
    const { data:result } = await response
    const { status,order } = result

    if (!status) {
      return dispatch(errorHappened({
        type: 'error',
        title: 'Error',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      })) }
    const { id } = order
    dispatch(getDataSuccess({ orderId:id }))
  }
  catch (error) {
    dispatch(errorHappened({
      type: 'error',
      title: 'Error',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}
