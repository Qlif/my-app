//Core
import { combineReducers } from "redux";

//Reducer
import { todosReducer } from "../../core/todos/reducer";

const rootReduser = () =>combineReducers({
    todos: todosReducer,
});

export { rootReduser };