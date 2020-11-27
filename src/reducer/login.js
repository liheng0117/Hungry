import { FETCH_LOGIN_USER, FETCH_LOGIN_CAPTCHA } from '@/constants/actionTypes'

const defaultState = {
  user: {},
  captcha: '',
}

export default function login(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGIN_USER:
      return { ...state, user: action.payload.data.user_name }
    case FETCH_LOGIN_CAPTCHA:
      return { ...state, captcha: action.payload.code }
    default:
      return state
  }
}
