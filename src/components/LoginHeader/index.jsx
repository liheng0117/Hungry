import React from 'react'
import { LeftOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import './style.less'

export default withRouter(LoginHeader)
function LoginHeader(props) {
  const back = () => {
    props.history.go(-1)
  }
  return (
    <div className="login-head">
      <p onClick={back}>
        <LeftOutlined />
      </p>
      <p>{props.title}</p>
    </div>
  )
}
