import React from 'react';
import ListItem from "./ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../store/todos/selectors";
import { checkedTodo, deleteTodo } from "../../store/todos/actions";

const List = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    const removeListItem = (id) => dispatch(deleteTodo(id))
    const changeChecked = (id) => dispatch(checkedTodo(id))

    return (
        <>
            {todos.map((el) =>
                <ListItem
                    {...el}
                    deleteTodo={removeListItem}
                    key={el.id}
                    checked={changeChecked}/>)}
        </>
    );
};

export default List;
