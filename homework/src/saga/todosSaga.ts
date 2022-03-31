import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import { addTodo } from "../store/todos/actions";
import { FETCH_ADD_TODO } from "../store/todos/actionTypes";

const fetchTodos = () => axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`);

function* fetchTodosWorker() {
    const { data } = yield call(fetchTodos);
    console.log(data);
    yield put(addTodo(data));
}

export function* fetchTodosWatcher() {
    yield takeEvery(FETCH_ADD_TODO, fetchTodosWorker);
}
