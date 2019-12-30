import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  // 类组件中直接使用静态对象 进行类型校验
  static propTypes = {
    btnText: PropTypes.string.isRequired
  }
  // 默认值
  static defaultProps = {
    btnText: "添加"
  }
  render() {
    return (
      <div>
        <input type="text" />
        <button>{this.props.btnText}</button>
      </div>
    )
  }
}
