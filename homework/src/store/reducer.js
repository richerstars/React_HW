import reducerNotify from './notification/reducer';
import reducerTheme from './theme/reducer';
import todosReducer from "./todos/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todos: todosReducer,
    notify: reducerNotify,
    theme: reducerTheme,
});

export default rootReducer;
