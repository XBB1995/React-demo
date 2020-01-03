import React, { Component } from 'react'

import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

import { getTodos } from './services'

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
      todos: [],
      isLoading: false
    }
  }
  addTodo = (todoTitle) => {
    // console.log(todoTitle)
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: "what the hell",
    //     completed: true
    //   })
    // })
    // 通过上述写法 push返回的是todos数组的长度 可用concat替代 或使用slice拷贝数组
    this.setState({
      todos: this.state.todos.concat({
        id: Math.floor(Math.random() * 10),
        title: todoTitle,
        completed: false
      })
    })
    // 或使用slice 展开符 拷贝数组 再使用push
    // const newTodos = [...this.state.todos]
    // newTodos.push({
    //   id: Math.random(),
    //   title: todoTitle,
    //   completed: false
    // })
    // this.setState({
    //   todos: newTodos
    // })
  }

  onCompletedChange = (id) => {
    // console.log("onCompletedChange run!")
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    })
  }

  onTodoItemDelete = (id) => {
    // console.log("delete item!")
    this.setState((prevState) => {
      return {
        // 使用filter删除元素
        todos: prevState.todos.filter(todo => {
          if (todo.id === id) return ''
          return todo
        })
      }
    })
  }

  render() {
    return (
      // <Fragment>
      <>
        {/* {this.state.todos[0].completed ? 'accept' : 'denied'} */}
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
        <TodoInput btnText="Add"
          addTodo={this.addTodo}
        />
        {/* <TodoList
          onCompletedChange={this.onCompletedChange}
          onTodoItemDelete={this.onTodoItemDelete}
          todos={this.state.todos}
        /> */}
        {/* 通过isLoading来决定页面组件的渲染 */}
        {
          this.state.isLoading
            ?
            <div>loading...</div>
            :
            <TodoList
              onCompletedChange={this.onCompletedChange}
              onTodoItemDelete={this.onTodoItemDelete}
              todos={this.state.todos}
            />
        }
        <Like />
      </>
      // </Fragment>
    )
  }

  getData() {
    // 通过isLoading属性来决定页面渲染顺序
    this.setState({
      isLoading: true
    })

    getTodos()
      .then(resp => {
        console.log(resp)
        if (resp.status === 200) {
          setTimeout(() => {
            this.setState({
              todos: resp.data
            })
          }, 2000)
        } else {
          // 错误处理
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  componentDidMount() {
    this.getData()
  }
}
