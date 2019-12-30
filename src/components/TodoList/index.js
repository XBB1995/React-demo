import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoItem
                // key属性是必须的
                key={todo.id}
                // id={todo.id}
                // title={todo.title}
                // isCompleted={todo.isCompleted}
                // 使用...展开表达式 而不用每个属性传入
                {...todo}
              />
            )
          })
        }
      </ul>
    )
  }
}
