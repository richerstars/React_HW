import { ADD_TODO, DELETE_TODOS,CHECKED_TODOS } from "./actionTypes";
import * as Actions from './actions';
import {ActionType} from "typesafe-actions";
import {TTodo} from './actions';
import { Reducer } from 'redux';

type TActions = typeof Actions;
type TTodosActions = ActionType<TActions>;

const initialState =  [{value: 'test', id: 1, isChecked: false}];

const todosReducer:Reducer<TTodo[], TTodosActions> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return  [...state, action.payload];
        case DELETE_TODOS:
            return state.filter(el => el.id !== action.payload);
        case CHECKED_TODOS:
            return state.map(el => el.id === action.payload ? {...el, isChecked: !el.isChecked} : el);
        default:
            return state;
    }
};

export default todosReducer;
