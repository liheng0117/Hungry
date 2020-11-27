import { FETCH_FORGET_PWD } from '@/constants/actionTypes'

const defaultState = {}

export default function login(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FORGET_PWD:
      return action.payload
    default:
      return state
  }
}
