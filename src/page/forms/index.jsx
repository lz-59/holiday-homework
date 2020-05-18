import React, { Component } from 'react'
import { Form, Input, Button, Upload, message, Icon } from 'antd';
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
        values.gender = values.gender[0].response.thumbUrl
        add(qs.stringify(values)).then(res => {
          if(res.data.status*1 === 200) {
            this.props.form.resetFields()
            success(res.data.info)
          }else {
            error(res.data.info)
          }
        })
      }
    })
  }

  onBeforeUpload = ({ type }) => {
    if (type !== 'image/png') {
      message.warning('格式不对')
      return false
    }
  }

  normFile = e => {
    if (e.file.type !== 'image/png') return false
    if (Array.isArray(e)) return e
    return e && e.fileList
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
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                rules: [{ required: true, message: 'Please input your Upload image!' }],
              })(
                <Upload
                  name="logo" 
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
                  listType="picture"
                  beforeUpload={this.onBeforeUpload}
                >
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
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
