import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { login } from '@/api'
import qs from 'qs'
import './styles.less'

message.config({
  top: 150,
});
const success = (val) => {
  message.success(val);
}
const error = (val) => {
  message.error(val);
}

export default @Form.create()
class extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(qs.stringify(values)).then(res => {
          if(res.data.status*1 === 200){
            success(res.data.message)
          }else{
            error(res.data.message)
          }
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <div className="login-psn">
        <h1>SIGN IN</h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="USERNAME"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                type="password"
                placeholder="PASSWORD"
              />,
            )}
          </Form.Item>
          <div className="login-reg">Not registered?<Link to="/reg">Sign Up</Link></div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
}
