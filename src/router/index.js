import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Forget } from './assembly'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forget" component={Forget} />
        </Switch>
      </BrowserRouter>
    )
  }
}
