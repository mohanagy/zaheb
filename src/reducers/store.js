import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isFetching:false,
  cars: [],
  services: [],
  workshops: [],
  selectedCarId: null,
  selectedServiceId: null,
  selectedWorkShopId: null,
  selectedMyOfferId: null,
  myRequests: [],
  myPurchases:[],
  myOrders:[],
  myOffers:[],
  offer:{},
  offers:[],
  favorites:[],
  orderId:null,
  order:{
    service:{},
    product:{},
  },
  myAvailableOrders:[],
  workshopOffers:[],
  products:[],
  selectedProductId:null,
  models:[],
  manufacturingYears:[],
  productsFilter:{
    product_classification_id:null,
    manufacturing_year_id:null,
    car_model_id:null,
  },
  filteredProducts:[],
  workShopProfile:{},
  product:{
    user:{},
    service:{},
    product:{},
  },
  noButton:false,
  skippedWorkShop:false,
  shippingDetails:null,
  coordinates:{},
  serviceByIdWorkshops:[],
  newServiceId:null,
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
