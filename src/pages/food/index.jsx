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
        props.location.search,
        { ignoreQueryPrefix: true }
      ).title
    )
  }, [])
  // 请求默认数据列表
  useEffect(() => {
    getFoodList()
  }, [])
  return (
    <div className="page-food">
      <LoginHeader title={title} />
      <FoodNav />
      <div className="food-section">
        {foodList.map((v) => {
          return (
            <div key={v.id} className="section-cont">
              <div>
                <img
                  src={`https://elm.cangdu.org/img/${v.image_path}`}
                  alt=""
                />
              </div>
              <div>
                <p>
                  <span>{v.name}</span>
                  <span>保 准 票</span>
                </p>
                <p>
                  <span>
                    {new Array(Math.floor(v.rating)).fill('-').map((a, i) => {
                      return (
                        <svg id="star" viewBox="0 0 32 32" key={i}>
                          <path d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"></path>
                        </svg>
                      )
                    })}
                    <i>{v.rating}</i>
                  </span>
                  <span>月售{v.recent_order_num}单</span>
                </p>
                <p>
                  <span>
                    {v.float_minimum_order_amount}起送/
                    {v.piecewise_agent_fee.tips}
                  </span>
                  <span>
                    {v.distance}/{v.order_lead_time}
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
