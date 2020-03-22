//Core
import { combineReducers } from "redux";

//Reducer
import { todosReduser } from "../../core/todos/reducer";

const rootReduser = () =>combineReducers({
    todos: todosReduser,
});

export { rootReduser };