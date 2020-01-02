import React, { Component } from 'react'
const noop = () => { }

export default class TodoItem extends Component {

  constructor() {
    // 只执行一次 存在坑
    super()
    this.state = {
      completedText: ''
    }
  }

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

  // UNSAFE_componentWillMount() {
  //   // 该方法将被弃用 与 getDerivedStateFromProps 方法相排斥
  //   console.log("componentWillMount")
  // }

  render() {
    const {
      id,
      title,
      isCompleted
    } = this.props
    // console.log(`TodoItem ${title} render`)
    // 解构可同样用在render函数中
    return (
      <li>
        <input
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        {id} {title} {this.state.completedText}
        <button onClick={this.handleBtnClick}>Delete</button>
      </li>
    )
  }

  componentDidMount() {
    // ajax请求
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 优化组件执行 返回bool值
    // 比较isCompleted状态 来决定是否更新
    return nextProps.isCompleted !== this.props.isCompleted
  }

  componentDidUpdate() {
    // 更新完成
  }

  static getDerivedStateFromProps(props) {
    // 返回一个对象 
    return {
      completedText: props.isCompleted ? '完成' : '未完成'
    }
  }

  componentWillUnmount() {
    // 卸载
  }
}


// 使用 PureComponent 可以直接实现浅层比较 替代shouldComponentUpdate中的校验功能
// 但注意也只是浅层比较
// import React, { PureComponent } from 'react'
// const noop = () => { }

// export default class TodoItem extends PureComponent {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   handleCheckboxChange = () => {
//     // console.log("checkbox changed!")
//     // 避免忘传方法 先进行能力测试
//     // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
//     const {
//       onCompletedChange = noop,
//       id
//     } = this.props
//     // 提前解构 简化代码 
//     // 无需验证 依靠空函数noop
//     onCompletedChange(id)
//   }

//   handleBtnClick = () => {
//     const {
//       onTodoItemDelete = noop,
//       id
//     } = this.props
//     onTodoItemDelete(id)
//   }
//   render() {
//     const {
//       id,
//       title,
//       isCompleted
//     } = this.props
//     console.log(`TodoItem ${title} render`)
//     // 解构可同样用在render函数中
//     return (
//       <li>
//         <input
//           checked={isCompleted}
//           onChange={this.handleCheckboxChange}
//           type="checkbox"
//         />
//         {id} {title} {isCompleted ? '已完成 ' : '未完成 '}
//         <button onClick={this.handleBtnClick}>Delete</button>
//       </li>
//     )
//   }
// }
