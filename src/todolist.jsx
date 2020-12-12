import React from 'react'
import { Button, Input, List } from 'antd'
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { inputValue, list, handleChange, handleAdd, handleDel } = props

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Input
          style={{ width: 200 }}
          value={inputValue}
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleAdd}>
          提交
        </Button>
      </div>
      <List
        size="large"
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item key={item} onClick={() => handleDel(index)}>
            {item}
          </List.Item>
        )}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      dispatch({
        type: 'change_input_value',
        value: e.target.value,
      })
    },
    handleAdd() {
      dispatch({
        type: 'add_list',
      })
    },
    handleDel(index) {
      dispatch({
        type: 'del_list',
        value: index,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
