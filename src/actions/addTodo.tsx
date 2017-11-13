// addTodo is an ActionCreator. It returns an action as an
// object with the `type` property (MUST) and some extra data
// that will be passed along to the reducers.
export const addTodo = (text: string) => {
    return {
        type: "ADD_TODO",
        payload: text
    }
}