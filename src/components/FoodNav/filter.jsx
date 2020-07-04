import React, { useEffect, useState } from 'react'

export default function FilterCom(props) {
  const [bgShow, setBgShow] = useState(true)
  const [filterShow, setFilterShow] = useState(true)
  useEffect(() => {
    setBgShow(props.filterBgShow)
    setFilterShow(props.filterShow)
  }, [props.filterBgShow])
  return (
    <div>
      <div
        className="nav-bg"
        style={{ display: bgShow ? 'none' : 'block' }}
      ></div>
      <div className={filterShow ? 'nav-filter-show' : 'nav-filter'}>
        <h1>配送方式</h1>
        <ul>
          <li>蜂鸟专送</li>
        </ul>
        <h1>商家属性（可以多选）</h1>
        <ul>
          <li>品牌商家</li>
          <li>外卖保</li>
          <li>准时达</li>
          <li>新店</li>
          <li>在线支付</li>
          <li>开发票</li>
        </ul>
        <div className="filter-foot">
          <button>清空</button>
          <button>确定</button>
        </div>
      </div>
    </div>
  )
}
