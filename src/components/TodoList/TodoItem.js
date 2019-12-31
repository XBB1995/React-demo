import React, { Component } from 'react'
const noop = () => { }

export default class TodoItem extends Component {
  handleCheckboxChange = () => {
    // console.log("checkbox changed!")
    // 避免忘传方法 先进行能力测试
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    const {
      onCompletedChange = noop,
      id
    } = this.props
    // 提前解构 简化代码 
    // 无需验证 依靠空函数noop
    onCompletedChange(id)
  }

  handleBtnClick = () => {
    const {
      onTodoItemDelete = noop,
      id
    } = this.props
    onTodoItemDelete(id)
  }
  
  render() {
    const {
      id,
      title,
      isCompleted
    } = this.props
    // 解构可同样用在render函数中
    return (
      <li>
        <input
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        {id} {title} {isCompleted ? '已完成 ' : '未完成 '} 
        <button onClick={this.handleBtnClick}>Delete</button>
      </li>
    )
  }
}
