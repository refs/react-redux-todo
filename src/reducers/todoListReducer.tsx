import { filter } from "lodash";

// An initial state is needed in order to have something to render / read from on
// app initialization
const initialTodos = [
  {
    text: "get milk",
    completed: false
  },
  {
    text: "wash dog",
    completed: false
  }
];

// Reducers control a portion of the state to which components can subscribe to.
// they basically respond to actions that have one thing in common: such actions
// control the same portion of the state. In this case, todoListReducers respond
// to actions such as add a new TODO element and COMPLETE a todo element, delet-
// ing it from the list.
const todoListReducers = (state = { todoList: initialTodos }, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      let _ret = [...state];
      _ret.push({
        text: action.payload,
        completed: false
      });
      return _ret;
    case "COMPLETE_TASK":
      let tasks_to_complete = [...state]
      tasks_to_complete.map(todo => {
        if (todo.text === action.payload) {
          todo.completed = true
        }
      })
      return tasks_to_complete
    case "CLEAR_COMPLETED_TASKS":
      let filtered_completed = filter([...state], (todo) => {return todo.completed === false})
      return filtered_completed
    default:
      return state.todoList;
  }
};

export { todoListReducers };
