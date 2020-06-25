import React, { useEffect, useState } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import './style.less'


const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776886_ptbgvlboqif.js', // 在 iconfont.cn 上生成
});

export default function FoodNav() {
  const [sortShow, setSortShow] = useState(true)
  const [bgShow, setBgShow] = useState(true)
  function sortFn() {
    setBgShow(!bgShow)
    setSortShow(!sortShow)
  }
  return (
    <div className="food-nav">
      <div className="nav">
        <div>分类<span className="sanjiao"></span></div>
        <div onClick={sortFn}>排序<span className="sanjiao"></span></div>
        <div>筛选<span className="sanjiao"></span></div>
      </div>
      <div className="nav-bg" style={{ display: bgShow ? 'none' : 'block' }}>
      </div>
      <div className={sortShow ? 'nav-sort-show' : 'nav-sort'}>
        <p><span><MyIcon type="iconrestaurant--fine" /></span> 智能排序</p>
        <p><span><MyIcon type="iconarrival" /></span> 距离最近</p>
        <p><span><MyIcon type="iconaixin" /></span> 销量最高</p>
        <p><span><MyIcon type="iconicon-test1" /></span> 起送价最低</p>
        <p><span><MyIcon type="iconall" /></span> 配速速度最快</p>
        <p><span><MyIcon type="iconfavorite" /></span> 评分最高</p>
      </div>
    </div >

  )
}
