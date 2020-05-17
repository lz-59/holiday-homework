import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { add } from '@/api'
import qs from 'qs'
import './styles.less'

const success = (val) => {
  message.success(val);
}

const error = (val) => {
  message.error(val);
}

export default @Form.create()

class Froms extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        add(qs.stringify(values)).then(res => {
          if(res.data.status*1 === 200) {
            success(res.data.info) 
          }else {
            error(res.data.info)
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    return (
      <div className="from-box">
        <div>
          <h1>Basic Form</h1>
          <div className="from-bs">Basic form elements</div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <h3>Name</h3>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your Name!' }],
              })(
                <Input
                  placeholder="Name"
                />,
              )}
            </Form.Item>
            <h3>Age</h3>
            <Form.Item>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input your Email!' }],
              })(
                <Input
                  placeholder="Email"
                />,
              )}
            </Form.Item>
            <h3>Price</h3>
            <Form.Item>
              {getFieldDecorator('msg', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <h3>File upload image</h3>
            <Form.Item>
              {getFieldDecorator('hospital', {
                rules: [{ required: true, message: 'Please input your Upload image!' }],
              })(
                <Input
                  placeholder="Upload image"
                />,
              )}
            </Form.Item>
            <h3>Gender</h3>
            <Form.Item>
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Please input your Gender!' }],
              })(
                <Input
                  placeholder="Gender"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="tj">
                Submit
              </Button>
              <Button onClick={() => this.props.form.resetFields()}>Cancel</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
