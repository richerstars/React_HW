import React from 'react';
import ListItem from "./ListItem";
import {TTodo} from "../../store/todos/actions";

type TProps = {
    todos: TTodo[],
    deleteTodo: (id:number)=> void,
    checkedTodo:(id:number)=> void,
};

const List = ({todos,deleteTodo,checkedTodo}:TProps) => {
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
