import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, createProvider } from "react-redux";

import { store } from "../store/store";
import { completeTask } from "../actions/completeTask";

export interface TodoProps {
  text: string;
  completed: boolean;
  completeTask: any;
}

class Todo extends React.Component<TodoProps, {}> {
  constructor(props: TodoProps) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleComplete() {
    this.props.completeTask(this.props.text);
  }

  render() {
    return (
      <li>
        {this.props.text} - {this.props.completed ? "done" : "pending"}
        <button onClick={() => this.handleComplete()}>remove</button>
      </li>
    );
  }
}

// mapTodoStateToProps maps the store state to this.props. It basically
// gives access to the store to the component as part of the component
// properties. For this specific case, the ToDo component needs to be
// aware of the `TodoList` state because it needs to delete elements.
const mapTodoStateToProps = (state: any) => {
  return {
    todoList: state.todoList
  };
};

// MapTodoDispatchToProps exposes actions to the component as properties.
// same as mapTodoStateToProps but for actions. For this specific component,
// we're exposing the action `completeTask` to each todo, so they can update
// the state of the entire list and trigger a render of the componers subscribed
// to this portion of the store.
const mapTodoDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ completeTask }, dispatch);
};

export default connect(mapTodoStateToProps, mapTodoDispatchToProps)(Todo);
