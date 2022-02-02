import React from 'react';
import ListItem from "./ListItem/ListItem";

const List = ({todos, changeTodo, deleteTodo}) => (
        <>
            {todos.map((el) =>
                <ListItem
                    {...el}
                    deleteTodo={deleteTodo}
                    key = {el.id}
                    checked = {changeTodo} />)}
        </>
    );

export default List;