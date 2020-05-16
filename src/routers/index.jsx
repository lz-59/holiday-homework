import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Reg, Login, Home } from './assembly'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/reg" component={Reg}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/login"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
