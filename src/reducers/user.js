import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: {},
}
const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.GET_USER_DATA_SUCCESS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default userReducer
