import React, { Component } from 'react'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [],
    }
  }
  handleChange = (e) => {
    this.setState({
      inputValue: this.input.value,
    })
  }
  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
  handleDelete = (index) => {
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState({
      list: newList,
    })
  }
  componentWillMount() {
    console.log('组件即将被挂载')
  }
  componentDidMount() {
    console.log('页面已经被挂载')
  }
  shouldComponentUpdate() {
    console.log('组件被更新前-should')
    return true
  }
  componentWillUpdate() {
    console.log('组件被更新前，should之后')
  }
  componentDidUpdate() {
    console.log('组件被更新完成后')
  }

  render() {
    console.log('render执行')
    return (
      <>
        <div>
          <input
            ref={(input) => {
              this.input = input
            }}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {this.state.list.map((i, index) => (
            <TodoItem
              key={i + index}
              content={i}
              index={index}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default TodoList
