import * as actionTypes from '../actions/actionTypes'

const initialState = {
  whoWeAre: {
    value:'',
    ar_value:'',
  },
  terms:{
    value:'',
    ar_value:'',
  },
  contactUs:{
    'address': {
      'key': 'address',
      'value': 'Palestine - Gaza, Al-Aqsa street,Building Dalloul 1, fourth floor',
      'ar_value': 'فلسطين - غزة , شارع الاقصى , عمارة دلول 1 , الطابق الرابع',
    },
    'website': {
      'key': 'website',
      'value': 'https://www.zaheb.com',
    },
    'email': {
      'key': 'email',
      'value': 'info@zaheb.com',
    },
    'phone': {
      'key': 'phone',
      'value': '111 1111 111',
    },
    'facebook': {
      'key': 'facebook',
      'value': 'https://www.facebook.com',
    },
    'twitter': {
      'key': 'twitter',
      'value': 'https://www.twitter.com',
    },
    'linkedin': {
      'key': 'linkedin',
      'value': 'https://www.linkedin.com',
    },
  },
  notifications:[],
}
const userReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case actionTypes.GET_GENERAL_DATA_SUCCESS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default userReducer
