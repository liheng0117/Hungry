import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser, getCaptcha } from '@/actions/login'
import { Form, Input, Button, message } from 'antd'
import { LoginHeader } from '@@'
import './style.less'

export default connect(
  (state) => {
    return {
      user: state.login.user,
      captcha: state.login.captcha,
    }
  },
  {
    getUser,
    getCaptcha,
  }
)(Login)
function Login(props) {
  const { getCaptcha, captcha, getUser } = props
  useEffect(() => {
    getCaptcha()
  }, [])
  // 换一张验证码
  async function changeCaptcha() {
    getCaptcha()
  }
  // 点击登录按钮 判断是否有用户名或密码 如果有进行登录
  async function onFinish(values) {
    if (values.pwd === undefined || values.username === undefined) {
      message.error('用户名或密码不为空')
    } else {
      const res = await getUser(values)
      message.info(res.payload.message)
      if (res.payload.status === '200') {
        props.history.push('/')
      }
    }
  }
  return (
    <div className="login">
      <LoginHeader title="密码登录" />
      <Form onFinish={onFinish}>
        <Form.Item name="username">
          <Input placeholder="账号" />
        </Form.Item>

        <Form.Item name="pwd">
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Input placeholder="验证码" />
          <div className="captcha-model">
            <img src={captcha} alt="" />
            <span onClick={changeCaptcha}>换一张</span>
          </div>
        </Form.Item>
        <p className="login-prompt">
          温馨提示：未注册的账号，登录时将自动注册
          <br />
          注册过的用户可凭借账号密码登录
        </p>
        <Form.Item>
          <Button className="btn" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <p className="login-rm">
          <a href="/forget">重置密码?</a>
        </p>
      </Form>
    </div>
  )
}
