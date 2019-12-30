import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
  return (
    <div>
      <h1>{props.desc}</h1>
      {/* props.children 类似插槽的作用 */}
      {props.children}
      {/* {props.x + props.y} */}
    </div>
  )
}

// props 类型检测
TodoHeader.propTypes = {
  desc: PropTypes.string,
  // 必须要传入数据 isRequired
  x: PropTypes.number.isRequired,
  y: PropTypes.number
  // children: PropTypes.isRequired
}
// props 默认值
TodoHeader.defaultProps = {
  desc: "默认desc"
}