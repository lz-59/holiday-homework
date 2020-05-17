import React, { Component } from 'react'
import { pageData } from '@/actions/sample'
import { connect } from 'react-redux'
import { Pagination } from 'antd'
import qs from 'qs'
import { SamData } from '@@'
import { pages } from '@/api'
import './styles.less'

export default @connect(res => ({
  data: res.sample.data,
  count: res.sample.count
}),{
  pageData,
})

class Sample extends Component {

  componentDidMount () {
    this.onChange(1)
  }
  onChange = page => {
    pages(qs.stringify({
      page,
      limit:6,
    }))
    .then(res => {
      if(res.data.code === 200){
        this.props.pageData(res.data.result)
      }
    })
  }
  render() {
    const { data, count } = this.props
    return (
      <div className="sam-box">
        <SamData data={data} count={count}/>
        <Pagination 
          defaultCurrent={1} 
          pageSize={6} 
          total={count*1} 
          onChange={this.onChange} 
        />
      </div>
    )
  }
}
