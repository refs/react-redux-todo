import { createStore } from "redux"
import todoApp from "../reducers/index"

// The store represents the state of the app.
let store = createStore(todoApp)

export { store }