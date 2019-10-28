import * as actionTypes from '../actions/actionTypes'

const initialState = {
  user: {},
  conversations:[],
  selectedReceiver:{
    id:null,
    name:'',
    image:'',
  },
  conversation:[],

}
const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.GET_USER_DATA_SUCCESS:
      return { ...state, ...payload }
    case actionTypes.UPDATE_USER_DATA:
      return { ...state,user:payload }
    case actionTypes.SEND_NEW_MESSAGE:
      return { ...state,conversation:state.conversation.concat(payload) }
    default:
      return state
  }
}

export default userReducer
