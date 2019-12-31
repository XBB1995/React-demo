// createRef 创建ref获取对应的组件或dom元素 
import React, { Component, createRef } from 'react'
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
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.inputDom = createRef()
    // 秒啊！ 改变this指向 bind也只执行一次
    // this.handleAddClick.bind(this)
  }
  handleInputChange = (e) => {
    // console.log(e)
    // 注意this指向需要通过箭头函数来引导
    // this.setState(() => {
    //   return {
    //     // 内部属性的赋值 返回一个对象
    //     inputValue: e.currentTarget.value
    //   }
    // })
    this.setState({
      // 直接传入一个对象 而不是返回一个对象
      inputValue: e.currentTarget.value
    })
  }
  // 将方法提出到render函数外 避免每次渲染都重新创建方法 主流方法
  handleAddClick = () => {
    // 如果需要传参 则需要额外的bind函数来协助实现
    // console.log(this.inputDom)
    // 实际上还需要对输入数据进行验证 如输入内容为空则什么也不执行
    if (this.state.inputValue === '') return
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, () => {
      this.inputDom.current.focus()
    })
  }
  // 结合bind修改this指向 还可以传入参数
  // handleAddClick() {
  //   console.log(this.state)
  // }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClick()
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
        />
        {/* <button onClick={this.handleAddClick.bind(this, 1234)}>{this.props.btnText}</button> */}
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
