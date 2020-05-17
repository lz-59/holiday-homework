import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Header, Nav } from '@@'
import Chart from '@/page/chart'
import './styles.less'

export default @connect(state => ({
  userName: state.login.userName,
}))

class Home extends Component {
  constructor(props) {
    super(props);
    const { userName } = this.props
    if(!userName){
      this.props.history.push('/login')
    }
  }
  
  render() {
    const { userName } = this.props
    return (
      <div className="home-box">
        <Header userName={userName} />
        <div className="home-se">
          <Nav/>
          <Switch>
            <Route path="/home/chart" component={Chart}/>
            <Redirect to="/home/chart"/>
          </Switch>
        </div>
      </div>
    )
  }
}
