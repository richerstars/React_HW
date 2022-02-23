import reducerNotify from './notification/reducer';
import themeReducer from './theme/reducer';
import todosReducer from "./todos/reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    todos: todosReducer,
    notification : reducerNotify,
    theme: themeReducer,
});

export default rootReducer;
