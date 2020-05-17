import React, { Component } from 'react'
import { Icon, Input, message } from 'antd'
import { withRouter } from 'react-router-dom'
import './styles.less'

const success = (val) => {
  message.success(val);
}

const error = (val) => {
  message.error(val);
}

export default @withRouter
class Header extends Component {

  onSearch = (val) => {
    if(this.props.location.pathname ==='/home/table'){
      success('功能暂未实现')
    }else{
      error('请到Table页面进行搜索')
    }
  }

  render() {
    const { userName } = this.props
    return (
      <div className="head-box">
        <div>
          <Icon type="dropbox" />
          <span>Purple</span>
        </div>
        <div>
          <Input.Search
             placeholder="Search"
             onSearch={value => this.onSearch(value)}
             style={{ width: 200 }}
          />
        </div>
        <div>
          <Icon type="mail" />
        </div>
        <div>
          <Icon type="bell" />
        </div>
        <div>
          <p></p>
          <p>{userName}</p>
        </div>
        <div>
          <Icon type="logout" />
        </div>
      </div>
    )
  }
}
