import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import TodoList from './todolist'

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
)
