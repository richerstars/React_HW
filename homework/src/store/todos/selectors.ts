import { ApplicationState } from "../types";

export const selectTodos = (state:ApplicationState) => state.todos;
