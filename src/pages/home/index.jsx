import React from 'react'
import { connect } from 'react-redux'
import { getName } from '@/actions/home'

function Home(props) {
  return <div>home</div>
}
export default connect(
  (state) => {
    return {
      name: state.home.name,
    }
  },
  {
    getName,
  }
)(Home)
