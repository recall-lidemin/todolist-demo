import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
// import TodoList from './components/TodoListMiddleWare/todolist'
import TodoList from './todolist'
import { Provider } from 'react-redux'
import store from './react-redux'

// react-redux连接store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
