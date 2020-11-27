import { FETCH_FOOD_LIST } from '@/constants/actionTypes'

const defaultState = {
  foodList: []
}

export default function food(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FOOD_LIST:
      return { ...state, foodList: action.payload }
    default:
      return state
  }
}