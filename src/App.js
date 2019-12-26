import React, { Component } from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'

export default class App extends Component {
  render() {
    return (
      // <Fragment>
      <>
        {/* 多组件组合的时候只允许一个根目录，不要包裹的div可以
        1.使用Fragment组件 
        2.直接使用空标签！！！*/}
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </>
      // </Fragment>
    )
  }
}
