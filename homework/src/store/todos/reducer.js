import { ADD_TODO, DELETE_TODOS,CHECKED_TODOS } from "./actionTypes";

const initialState = { todos: [{value: 'test', id: 1, isChecked: false}]};

const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, payload]};
        case DELETE_TODOS:
            return {...state,todos: state.todos.filter(el => el.id !== payload)};
        case CHECKED_TODOS:
            return {...state,todos: state.todos.map(el => el.id === payload ? {...el, isChecked: !el.isChecked} : el)};
        default:
            return state;
    }
};

export default todosReducer;
