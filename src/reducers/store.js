import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isFetching:false,
  cars: [],
  services: [],
  workshops: [],
  selectedCarId: null,
  selectedServiceId: null,
  selectedWorkShopId: null,
  myRequests: [],
  myPurchases:[],
  myOffers:[],
  offers:[],
  favorites:[],
  orderId:null,
  order:{
    service:{},
  },
}
const carsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.GET_STORE_DATA_SUCCESS:
      return { ...state, ...payload }
    case actionTypes.START_STORE_FETCHING:
      return { ...state, ...payload }
    case actionTypes.FINISH_STORE_FETCHING:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default carsReducer
