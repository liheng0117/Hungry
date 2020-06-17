import React from 'react'
import { Icon } from 'antd'
import './style.less'
export default function Header (props) {
  console.log(props)
  const onChange = () => {
    this.history.back()
  }
  return  (
    <div className="comt-header">
      <div className="header-left" onChange={onChange}>
        <Icon type="left" />
      </div>
      <div className="header-center">
        {props.title}
      </div>
      <div className="header-right"></div>
    </div>
  )
}