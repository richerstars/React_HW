import { ADD_TODO, DELETE_TODOS,CHECKED_TODOS } from "./actionTypes";

const initialState =  [{value: 'test', id: 1, isChecked: false}];

const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return  [...state, payload];
        case DELETE_TODOS:
            return state.filter(el => el.id !== payload);
        case CHECKED_TODOS:
            return state.map(el => el.id === payload ? {...el, isChecked: !el.isChecked} : el);
        default:
            return state;
    }
};

export default todosReducer;
