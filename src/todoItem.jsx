import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    const { content, index, test, handleDelete } = this.props
    return (
      <li onClick={() => handleDelete(index)}>
        {test}----{content}
      </li>
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
