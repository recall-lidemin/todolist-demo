import {
  INIT_LIST,
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
  GET_INIT_LIST,
} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
})
export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
})
export const delTodoItemAction = (value) => ({
  type: DEL_TODO_ITEM,
  value,
})
export const initListAction = (value) => ({
  type: INIT_LIST,
  value,
})
// redux-thunk中间件用法
// export const getTodoList = () => {
//   return async (dispatch) => {
//     const res = await axios.get('http://localhost:3000/list')
//     const action = initListAction(res.data)
//     dispatch(action)
//   }
// }
export const getTodoList = () => ({
  type: GET_INIT_LIST,
})
