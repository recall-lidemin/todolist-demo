import React, { useState } from 'react'
import { Button, Input, List } from 'antd'
import store from './store'
import {
  getInputChangeAction,
  addTodoItemAction,
  delTodoItemAction,
} from './store/actionCreators'

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
  // 监听Store改变，重新拉取Store中的最新数据
  store.subscribe(handleStoreChange)
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Input
          style={{ width: 200 }}
          value={state.inputValue}
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleAdd}>
          提交
        </Button>
      </div>
      <List
        size="large"
        bordered
        dataSource={state.list}
        renderItem={(item, index) => (
          <List.Item key={item} onClick={() => handleDel(index)}>
            {item}
          </List.Item>
        )}
      />
    </>
  )
}

export default TodoList
