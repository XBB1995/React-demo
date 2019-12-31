import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLiked: true
    }
  }
  // 修改React中的状态必须要使用setState方法 才能重新渲染
  handleLikeClick = () => {
    // 第一种方式 直接传入一个对象
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })
    // 第二种方式 使用箭头函数方法
    // 两个参数 上一次的状态 和 上一次的props
    // setState 方法是异步方法 第二个参数是回调函数 获取最新的state
    this.setState((prevState, props) => {
      // console.log('内部: ' + this.state.isLiked);
      return {
        isLiked: !prevState.isLiked
      }
    }, () => {
      // console.log(`回调函数: ${this.state.isLiked}`)
    })
    // console.log(`外部: ${this.state.isLiked}`)
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikeClick}>
          {
            this.state.isLiked ? '取消😀' : '喜欢😂'
          }
        </span>
      </div>
    )
  }
}
