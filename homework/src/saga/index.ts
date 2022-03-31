import {all} from "redux-saga/effects";
import { fetchTodosWatcher } from "./todosSaga";

export function* rootWatcher(){
    yield all([fetchTodosWatcher()]);
}
