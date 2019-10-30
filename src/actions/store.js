
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
        title: 'خطأ',
        message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
      }))
      return false
    }
    return dispatch(getDataSuccess({ products }))
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
    console.log({
      workshopOffers,json,
    })
    dispatch(getDataSuccess({ workshopOffers }))
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
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    })) }
    const { id } = order
    dispatch(getDataSuccess({ orderId:id }))
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
    console.log({
      json,
    })
    dispatch(getDataSuccess({ order }))
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
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
    }
    return true
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
      title: 'خطأ',
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
      title: 'خطأ',
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
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    }))
    return false
  }
  finally {
    dispatch(finishStoreFetching())
  }
}

export const setFilters = ({ manufacturingYear,vehicleModel,selectedProductId }) => async (dispatch) => {
  console.log({
    manufacturingYear,vehicleModel,selectedProductId,
  })
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
    if (!status) { return dispatch(errorHappened({
      type: 'error',
      title: 'خطأ',
      message: 'حدث خطأ ما يرجى التأكد من اتصالك بالانترنت',
    })) }
    const { id } = order
    dispatch(getDataSuccess({ orderId:id }))
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
