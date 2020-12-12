import React, { useEffect, useState } from 'react'
import store from './store'
import {
  getInputChangeAction,
  addTodoItemAction,
  delTodoItemAction,
  initListAction,
} from './store/actionCreators'
import TodoItemUi from './todoItemUI'
import axios from 'axios'

const TodoList = () => {
  const [state, setState] = useState(store.getState())
  // input改变
  const handleChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  // add
  const handleAdd = () => {
    const action = addTodoItemAction()
    store.dispatch(action)
  }
  // del
  const handleDel = (index) => {
    const action = delTodoItemAction(index)
    store.dispatch(action)
  }
  const handleStoreChange = () => {
    setState(store.getState())
  }
  // 发送请求获取数据
  const getList = async () => {
    const res = await axios.get('http://localhost:3000/list')
    const action = initListAction(res.data)
    store.dispatch(action)
  }

  useEffect(() => {
    getList()
  }, [])
  // 监听Store改变，重新拉取Store中的最新数据
  store.subscribe(handleStoreChange)
  return (
    <TodoItemUi
      handleAdd={handleAdd}
      handleDel={handleDel}
      handleChange={handleChange}
      state={state}
    />
  )
}

export default TodoList
