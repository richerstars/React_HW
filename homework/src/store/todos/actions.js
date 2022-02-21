import { ADD_TODO, CHECKED_TODOS, DELETE_TODOS } from "./actionTypes";

export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const deleteTodo = (payload) => ({type: DELETE_TODOS, payload});
export const checkedTodo = (payload) => ({type: CHECKED_TODOS, payload});
