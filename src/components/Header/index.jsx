import React, { Component } from 'react'
import { Icon, Input } from 'antd'
import './styles.less'

export default class Header extends Component {
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
             onSearch={value => console.log(value)}
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
