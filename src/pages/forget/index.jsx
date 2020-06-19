import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCaptcha } from '@/actions/login'
import { Form, Input, Button, message } from 'antd'
import { LoginHeader } from '@@'
import './style.less'

export default connect(
  (state) => {
    return {
      captcha: state.login.captcha,
    }
  },
  { getCaptcha }
)(Forget)
function Forget(props) {
  const { getCaptcha, captcha, getUser } = props
  useEffect(() => {
    getCaptcha()
  }, [])
  // 换一张验证码
  async function changeCaptcha() {
    getCaptcha()
  }
  async function onFinish(values) {
    console.log(values)
  }
  return (
    <div className="forget">
      <LoginHeader title="重置密码" />
      <Form onFinish={onFinish}>
        <Form.Item name="username">
          <Input placeholder="账号" />
        </Form.Item>
        <Form.Item name="oldPassword">
          <Input placeholder="旧密码" />
        </Form.Item>
        <Form.Item name="username">
          <Input placeholder="请输入新密码" />
        </Form.Item>
        <Form.Item name="username">
          <Input placeholder="请确认密码" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="验证码" />
          <div className="captcha-model">
            <img src={captcha} alt="" />
            <span onClick={changeCaptcha}>换一张</span>
          </div>
        </Form.Item>
        <Form.Item>
          <Button className="btn" htmlType="submit">
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
