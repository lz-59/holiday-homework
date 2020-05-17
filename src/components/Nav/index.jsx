import React, { Component } from 'react'
import { Menu, Icon, Progress  } from 'antd';
import { NavLink } from 'react-router-dom'
import './styles.less'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-box">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['5']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
         <Menu.Item key="1">           
            <NavLink to="/home">
              <Icon type="pie-chart" />
              <span>Dashboard ( 2 new updates )</span>
            </NavLink>      
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/home">
              <Icon type="desktop" />
              <span>Basic UI Elements</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/home">
            <Icon type="question-circle" />
            <span>Icons</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/home/form">
            <Icon type="info-circle" />
            <span>Form Elements</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="/home/chart">
            <Icon type="radar-chart" />
            <span>Chart</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to="/home/table">
            <Icon type="heat-map" />
            <span>Table</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7">
            <NavLink to="/home/sample">
            <Icon type="box-plot" />
            <span>Sample Pages</span>
            </NavLink>
          </Menu.Item>
          <div className="nav-nr">
            <span>Total Sales</span>
            <Progress 
              percent={70} 
              size="small" 
              format = {function(percent, successPercent){
                return ""
              }}
              strokeColor={{
                '0%': '#82D290',
                '100%': '#EDD659',
              }}
            />
            <p>50 ltems sold</p>
            <span>Customer Target</span>
            <Progress 
              percent={90} 
              size="small" 
              format = {function(percent, successPercent){
                return ""
              }}
              strokeColor={{
                '0%': '#5030F4',
                '100%': '#A352E6',
              }}
            />
            <p>200 ltems sold</p>
          </div>
        </Menu>
      </div>
    )
  }
}
