import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class TodoItem extends Component {
  componentWillReceiveProps() {
    console.log('接受props-执行')
  }
  componentWillUnmount() {
    console.log('组件卸载')
  }
  render() {
    const { content, index, test, handleDelete } = this.props
    return React.createElement(
      'li',
      { onClick: () => handleDelete(index) },
      React.createElement('span', { id: test }, content)
    )
  }
}
TodoItem.propTypes = {
  content: PropsTypes.string.isRequired,
  index: PropsTypes.number,
  handleDelete: PropsTypes.func,
}
TodoItem.defaultProps = {
  test: 'hello',
}

export default TodoItem
