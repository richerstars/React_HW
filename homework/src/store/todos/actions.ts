import { ADD_TODO, CHECKED_TODOS, DELETE_TODOS, FETCH_ADD_TODO } from "./actionTypes";
import {action} from "typesafe-actions";

export type TTodo = {
    value : string,
    id: number,
    isChecked: boolean,
}

export const addTodo = (payload:TTodo) => action(ADD_TODO, payload);
export const deleteTodo = (payload:number) => action(DELETE_TODOS, payload);
export const checkedTodo = (payload:number) => action(CHECKED_TODOS, payload);
export const fetchAddTodo = () => action(FETCH_ADD_TODO);
