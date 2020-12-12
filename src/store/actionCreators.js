import {
  INIT_LIST,
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
} from './actionTypes'

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
