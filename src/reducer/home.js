import { FETCH_HOME_NAME } from '@/constants/actionTypes'

const defaultState = {
  name: 'home',
}

export default function home(state = defaultState, action) {
  switch (action.type) {
    case FETCH_HOME_NAME:
      return { ...state, name: action.payload }
    default:
      return state
  }
}
