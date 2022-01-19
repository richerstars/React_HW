import React from 'react';
import ListItem from "./ListItem/ListItem";
import './List.css'


const List = ({todos, changeTodo, deleteTodo}) => (
        <div className="todos">
            {todos.map((el) =>
                <ListItem
                    {...el}
                    deleteTodo={deleteTodo}
                    key = {el.id}
                    checked = {changeTodo} />)}
        </div>
    );

export default List;
