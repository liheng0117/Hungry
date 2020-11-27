import React, { useState } from 'react'
import Sort from './sort'
import Filter from './filter'
import './style.less'

export default function FoodNav(props) {
  const [sortShow, setSortShow] = useState(true)
  const [sortBgShow, setSortBgShow] = useState(true)
  const [filterShow, setFilterShow] = useState(true)
  const [filterBgShow, setFilterBgShow] = useState(true)
  // 点击排序按钮
  function sortFn() {
    setSortBgShow(!sortBgShow)
    setSortShow(!sortShow)
    setFilterBgShow(true)
    setFilterShow(true)
  }
  function sortFnBack(bool) {
    setSortBgShow(bool)
    setSortShow(bool)
  }
  // 点击筛选按钮
  function filterFn() {
    setSortBgShow(true)
    setSortShow(true)
    setFilterBgShow(!filterBgShow)
    setFilterShow(!filterShow)
  }
  return (
    <div className="food-nav">
      <div className="nav">
        <div>
          分类<span className="sanjiao"></span>
        </div>
        <div onClick={sortFn}>
          排序<span className="sanjiao"></span>
        </div>
        <div onClick={filterFn}>
          筛选<span className="sanjiao"></span>
        </div>
      </div>
      <Sort
        sortShow={sortShow}
        sortBgShow={sortBgShow}
        sortFnBack={sortFnBack}
      />
      <Filter filterBgShow={filterBgShow} filterShow={filterShow} />
    </div>
  )
}
