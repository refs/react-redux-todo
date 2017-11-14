import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { store } from "./store/store"
import TodoList from "./components/TodoList"
import TopLayer from "./components/TopLayer"

ReactDOM.render(
    <Provider store={store}>
        <div>
            <TopLayer />
            <TodoList name="My First List"/>
        </div>
    </Provider>,
    document.getElementById("example")
);