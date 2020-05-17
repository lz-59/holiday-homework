import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import './styles.less'
export default class SamData extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="sd-box">
        {
          data.map(i => {
            return (
              <dl key={i.id}>
                <dt>
                  <p>{i.tags}</p>
                  <p>{i.title}</p>
                </dt>
                <dd>
                  <p>
                    <span></span>
                  </p>
                  <p>
                    <span>Mr·li</span>
                    <span>21 March 2020</span>
                  </p>
                  <p>
                    <Button>
                    <Icon type="book" />
                      Bookmark
                    </Button>
                  </p>
                </dd>
              </dl>
            )
          })
        }
      </div>
    )
  }
}
