import * as actionTypes from '../actions/actionTypes'

const initialState = {
  cars: [],
  services: [],
  workshops: [],
  selectedCarId: null,
  selectedServiceId: null,
  selectedWorkShopId: null,
}
const carsReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.GET_STORE_DATA_SUCCESS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default carsReducer
