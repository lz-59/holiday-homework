import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from '@@'
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
      </div>
    )
  }
}
