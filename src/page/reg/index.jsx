import React, { Component } from 'react'
import { Form, Input, Button, message, Alert } from 'antd';
import { Link } from 'react-router-dom';
import { reg } from '@/api'
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
        reg(qs.stringify(values)).then(res => {
          if(res.data.status*1 === 200){
            success(res.data.info)
            this.props.history.push('/login')
          }else{
            error(res.data.info)
          }
        })
      }
    })
  }

  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form
    if (value && value !== getFieldValue('pwd')) {
        callback('两次输入不一致！')
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="reg-box">
        <div className="reg-psn">
        <h1>SIGN UP</h1>
        <Alert message="Your info has been saved." type="success" />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="NAME"
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
          <Form.Item>
            {getFieldDecorator('confirmPassword', {
                    rules: [{
                            required: true,
                            message: '请再次输入以确认新密码',
                      }, {
                            validator: this.handleConfirmPassword
                      }],
              })(
                <Input 
                  type="password"
                  placeholder="RE-TYPE PASSWORD" 
                />
              )}
          </Form.Item>
          <div className="reg-login">Not registered?<Link to="/login">Sign In</Link></div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
}
