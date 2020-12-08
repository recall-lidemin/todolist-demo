import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: [2],
    }
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
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

  render() {
    console.log(this.state.list)
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          {this.state.list.map((i, index) => (
            <li key={i} onClick={this.handleDelete.bind(this, index)}>
              {i}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default TodoList
