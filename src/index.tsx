import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { store } from "./store/store";
import TodoList from "./components/TodoList";
import TopLayer from "./components/TopLayer";
import AboutPage from "./pages/About";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <TopLayer />
        <Route exact path="/" component={TodoList} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("example")
);
