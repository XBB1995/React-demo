import axios from 'axios'

import apis from './apis'

const ajax = axios.create({
  baseURL: apis.baseURL
})

// 全局拦截器处理

export const getTodos = () => {
  return ajax.get(apis.todos)
}