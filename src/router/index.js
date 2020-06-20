import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Forget, Food } from './assembly'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forget" component={Forget} />
          <Route path="/food" component={Food} />
        </Switch>
      </BrowserRouter>
    )
  }
}
