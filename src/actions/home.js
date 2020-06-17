import { FETCH_HOME_NAME } from '@/constants/actionTypes'
export function getName(options) {
  return {
    type: FETCH_HOME_NAME,
    payload: '张三',
  }
}
