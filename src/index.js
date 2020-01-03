import React from 'react'
import { render } from 'react-dom'

import App from './App'

// 如果想要全局的扩展React组件的prototype
// 比如把ajax的方法挂载在全局组件的this上
// 引入所有的ajax请求
// import * as services from './services'
// // 在显式原型上挂载一个http的对象 调用对应方法
// React.Component.prototype.http = services

render(
  <App />,
  document.querySelector('#root')
)
