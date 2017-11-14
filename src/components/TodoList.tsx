import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, createProvider } from "react-redux";

import Todo from "./Todo";
import { TodoProps } from "./Todo";
import { store } from "../store/store";
import { addTodo } from "../actions/addTodo";
import { completeTask } from "../actions/completeTask";
import { clearCompletedTasks } from "../actions/clearCompletedTasks";

export interface TodoListProps {
  name: string;
  todoList?: Array<TodoProps>;
  addTodo: any;
}

// ARCHITECTURE NOTE
// Since this is not a 'dumb component' as it reacts to Redux state, this ideally should
// be within a folder `/containers` instead of `/components`
class TodoList extends React.Component<TodoListProps, {}> {
  constructor(props: TodoListProps) {
    super(props);
  }

  fillTodos() {
    let _ret: any = [];
    this.props.todoList.map((el: any) =>
      _ret.push(<Todo key={el.text} text={el.text} completed={el.completed} />)
    );
    return _ret;
  }

  render() {
    return (
      <div>
        {this.props.name}
        <ul>{this.fillTodos()}</ul>{" "}
        <input
          id="todoTextInput"
          type="text"
          placeholder="...add a task here"
        />
        <button
          onClick={() =>
            // Note we have access here to `addTodo()` as we BOUND the actionCreator
            // a few lines below to the component properties
            this.props.addTodo(document.getElementById("todoTextInput").value)}
        >
          Add
        </button>
        <br />
        <input type='button' value='clear completed' onClick={() => this.props.clearCompletedTasks()}/>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addTodo, clearCompletedTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
