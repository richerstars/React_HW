import React from 'react';
import ListItem from "./ListItem/index";

const List = ({todos,deleteTodo,checkedTodo}) => {
    return (
        <>
            {todos.map((el) =>
                <ListItem
                    {...el}
                    deleteTodo={deleteTodo}
                    key={el.id}
                    checked={checkedTodo}/>)}
        </>
    );
};

export default List;
