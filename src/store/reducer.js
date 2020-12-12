import {
  INIT_LIST,
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DEL_TODO_ITEM,
} from './actionTypes'
const defaultState = {
  inputValue: '',
  list: [],
}

// reducer接收state，但是不能去改变它
const reducer = (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = { ...state, inputValue: action.value }
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = {
      ...state,
      list: [...state.list, state.inputValue],
      inputValue: '',
    }
    return newState
  }
  if (action.type === DEL_TODO_ITEM) {
    const newState = {
      ...state,
    }
    newState.list.splice(action.value, 1)
    return newState
  }
  if (action.type === INIT_LIST) {
    const newState = {
      ...state,
      list: action.value,
    }
    return newState
  }
  return state
}

export default reducer
