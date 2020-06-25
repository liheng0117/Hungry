import {
  FETCH_FOOD_LIST
} from '@/constants/actionTypes'
import {
  get
} from '@/utils/request'
import api from '@/services/api'

export function getFoodList(options) {
  return {
    type: FETCH_FOOD_LIST,
    payload: get(`${api.typeListUrl}&order_by=${options}`),
  }
}