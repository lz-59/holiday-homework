import React, { Component } from 'react'
import { Button, Table, Divider, Progress } from 'antd'
import { connect } from 'react-redux'
import { firstData, del } from '@/api'
import { defaultData } from '@/actions/table'
import './styles.less'

export default @connect(state => ({
  data: state.table.data,
}),{
  defaultData,
})
class Tables extends Component {
  componentDidMount () {
    firstData().then(res => {
      this.props.defaultData(res.data)
    })
  }
  del = (id) => {
    
  }
  render() {
    const columns = [
      {
        title: 'User',
        render: () => <p className="tab-tx"></p>,
      },
      {
        title: 'First name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        key: 'age',
        render: (i) => (
          <Progress
            format = {function(){
              return ""
            }}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={i.age*1}
          />
        )
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Deadline',
        dataIndex: 'hospital',
        key: 'hospital',
      },
      {
        title: 'Action',
        key: 'action',
        render: (i) => (
          <span>
            <b>Edit</b>
            <Divider type="vertical" />
            <b onClick={() => this.del(i.id)}>Delete</b>
          </span>
        ),
      },
    ]
    const { data } = this.props
    return (
      <div className="tab-box">
        <div>
          <h2>Striped Table</h2>
          <div className="tab-hed">
            Add class 
            <span>.table-string</span>
            <Button type="primary">Add user</Button>
          </div>        
            <Table 
              rowKey={v => v.id}
              columns={columns} 
              dataSource={data} 
              pagination={ false } 
            />
        </div>
      </div>
    )
  }
}
