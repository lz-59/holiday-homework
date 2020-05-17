import React, { Component } from 'react'
import echarts from 'echarts'
import './styles.less'
export default class Chart extends Component {
  componentDidMount () {
    
    var t1 = echarts.init(this.t1)
    var t2 = echarts.init(this.t2)
    var t3 = echarts.init(this.t3)
    var t4 = echarts.init(this.t4)

    window.addEventListener('resize', () => {
      t1.resize()
      t2.resize()
      t3.resize()
      t4.resize()
    })
        // 指定图表的配置项和数据
    var t11 = {
                title: {
                    text: 'Bar Chart'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
              }
    var t22 = {
                title: {
                  text: 'Line Chart'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            }
  var t33 = {
              title: {
                text: 'Area Chart'
              },
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                  smooth: true
              }]
          }
var t44 = {
            title: {
              text: 'Doughnut Chart'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 200,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
          }
      

        // 使用刚指定的配置项和数据显示图表。
        t1.setOption(t11)
        t2.setOption(t22)
        t3.setOption(t33)
        t4.setOption(t44)
  }
  render() {
    return (
      <div className="cat-box">
        <div>
          <div ref={v => this.t2 = v}></div>
        </div>
        <div>
          <div ref={v => this.t1 = v}></div>
        </div>
        <div>
          <div ref={v => this.t3 = v}></div>
        </div>
        <div>
          <div ref={v => this.t4 = v}></div>
        </div>
      </div>
    )
  }
}
