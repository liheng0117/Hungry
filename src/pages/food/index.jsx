import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LoginHeader, FoodNav } from '@@'
import { getFoodList } from '@/actions/food'
import qs from 'qs'
import './style.less'

export default connect(
  ({ food }) => {
    return {
      foodList: food.foodList,
    }
  },
  {
    getFoodList,
  }
)(Food)
function Food(props) {
  const { foodList, getFoodList } = props
  const [title, setTitle] = useState()
  useEffect(() => {
    setTitle(
      qs.parse(
        // 把参数用qs切割成对象的形式
        props.location.search, { ignoreQueryPrefix: true }
      ).title
    )
  }, [])
  useEffect(() => {
    getFoodList()
  }, [])
  return (
    <div className="page-food">
      <LoginHeader title={title} />
      <FoodNav />
      <div className="food-section">
        {
          foodList.map(v => {
            return (
              <div key={v.id} className="section-cont">
                <div><img src={`https://elm.cangdu.org/img/${v.image_path}`} alt="" /></div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
