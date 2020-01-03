import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
  static propTypes = {
    // 可以通过shape来定制数组对象中具体的类型要求
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChange: PropTypes.func,
    onTodoItemDelete: PropTypes.func
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
                // completed={todo.completed}
                // 使用...展开表达式 而不用每个属性传入
                {...todo}
                onCompletedChange={this.props.onCompletedChange}
                onTodoItemDelete={this.props.onTodoItemDelete}
              />
            )
          })
        }
      </ul>
    )
  }
}
