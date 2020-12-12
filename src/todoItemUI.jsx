import React from 'react'
import { Button, Input, List } from 'antd'

const TodoItemUi = (props) => {
  const { state, handleChange, handleAdd, handleDel } = props
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

export default TodoItemUi
