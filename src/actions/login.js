import { FETCH_LOGIN_USER, FETCH_LOGIN_CAPTCHA } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function getUser(options) {
  return {
    type: FETCH_LOGIN_USER,
    payload: post(api.loginUrl, options),
  }
}

export function getCaptcha(options) {
  return {
    type: FETCH_LOGIN_CAPTCHA,
    payload: post(api.captchaUrl),
  }
}
