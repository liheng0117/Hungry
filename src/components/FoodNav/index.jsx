import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getFoodList } from '@/actions/food'
import { createFromIconfontCN } from '@ant-design/icons'
import './style.less'

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776886_ptbgvlboqif.js', // 在 iconfont.cn 上生成
});
export default connect(
  () => {
    return {}
  },
  {
    getFoodList,
  }
)(FoodNav)
function FoodNav(props) {
  const [sortShow, setSortShow] = useState(true)
  const [bgShow, setBgShow] = useState(true)
  function sortFn() {
    setBgShow(!bgShow)
    setSortShow(!sortShow)
  }
  //  智能排序
  function oderDefault() {
    props.getFoodList(0)
    setBgShow(true)
    setSortShow(true)
  }
  // 距离最近
  function oderDistance() {
    props.getFoodList(5)
    setBgShow(true)
    setSortShow(true)
  }
  // 销量排序 
  function oderSales() {
    props.getFoodList(6)
    setBgShow(true)
    setSortShow(true)
  }
  // 起送价最低
  function oderDelivery() {
    props.getFoodList(1)
    setBgShow(true)
    setSortShow(true)
  }
  // 配送速度最快
  function oderSpeed() {
    props.getFoodList(2)
    setBgShow(true)
    setSortShow(true)
  }
  // 评分最高
  function oderScore() {
    props.getFoodList(3)
    setBgShow(true)
    setSortShow(true)
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
        <p onClick={oderDefault}><span><MyIcon type="iconrestaurant--fine" /></span> 智能排序</p>
        <p onClick={oderDistance}><span><MyIcon type="iconarrival" /></span> 距离最近</p>
        <p onClick={oderSales}><span><MyIcon type="iconaixin" /></span> 销量最高</p>
        <p onClick={oderDelivery}><span><MyIcon type="iconicon-test1" /></span> 起送价最低</p>
        <p onClick={oderSpeed}><span><MyIcon type="iconall" /></span> 配速速度最快</p>
        <p onClick={oderScore}><span><MyIcon type="iconfavorite" /></span> 评分最高</p>
      </div>
    </div >
  )
}
