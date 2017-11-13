import { combineReducers } from 'redux'
import { todoListReducers } from './todoListReducer'

// This is the structure of the store. In this case, todoList is a portion
// of the state being controlled by `todoListReducers`, a bunch of reducers
// that respond to actions. This is then being passed to the store to spe-
// cify the state.
const todoApp = combineReducers({
    todoList: todoListReducers
})

export default todoApp