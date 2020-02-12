import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isFetching:false,
  error:null,
  user: {},
  conversations:[],
  selectedReceiver:{
    id:null,
    name:'',
    image:'',
  },
  conversation:[],
  customerServices:[],
  selectedSupportTicket:null,
  supportTicketConversation:[],
  code:null,


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
    case actionTypes.START_USER_FETCHING:
      return { ...state, ...payload }
    case actionTypes.FINISH_USER_FETCHING:
      return { ...state, ...payload }
    case actionTypes.UPDATE_CONFIRM_CODE:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default userReducer
