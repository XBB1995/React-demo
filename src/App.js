import React, { Component } from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

export default class App extends Component {
  // state 自身状态 class特有 props 传递得到的状态
  // 函数式组件 又称 无状态组件 || 类组件 又称 有状态组件
  // 受控 半受控 非受控组件  默认使用受控组件 保证数据一致性
  // state = {
  //   title: 'todoList1'
  // }
  constructor() {
    super()
    this.state = {
      title: "待办事项类型",
      desc: "Do it now!",
      article: '<div>this is a article paragraph</div>',
      todos: [{
        id: 1,
        title: "起床",
        isCompleted: true
      }, {
        id: 2,
        title: "吃饭",
        isCompleted: false
      }]
    }
  }
  render() {
    return (
      // <Fragment>
      <>
        {/* {this.state.todos[0].isCompleted ? 'accept' : 'denied'} */}
        {/* 使用map渲染array */}
        {/* {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
          })
        } */}
        {/* 当标签属性中存在html格式文字 需要使用如下方式渲染 */}
        {/* {
          <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        } */}
        {/* 多组件组合的时候只允许一个根目录，不要包裹的div可以
        1.使用Fragment组件 
        2.直接使用空标签！！！*/}
        {/* 标签内联属性中输入数字需要用花括号包裹 否则是string类型 */}
        <TodoHeader desc={this.state.desc} x={1} y={2}>
          <p>{this.state.title}</p>
        </TodoHeader>
        <TodoInput btnText="Add" />
        <TodoList todos={this.state.todos} />
        <Like />
      </>
      // </Fragment>
    )
  }
}
