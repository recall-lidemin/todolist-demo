const defaultState = {
  inputValue: '',
  list: [],
}

// reducer接收state，但是不能去改变它
const reducer = (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    return {
      ...state,
      inputValue: action.value,
    }
  }
  if (action.type === 'add_list') {
    return {
      ...state,
      list: [...state.list, state.inputValue],
      inputValue: '',
    }
  }
  if (action.type === 'del_list') {
    const newState = {
      ...state,
    }
    newState.list.splice(action.value, 1)
    console.log(newState)
    return newState
  }
  return state
}

export default reducer
