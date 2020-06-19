import { FETCH_FORGET_PWD } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function changePwd(options) {
  return {
    type: FETCH_FORGET_PWD,
    payload: post(api.changePwdUrl, options),
  }
}

