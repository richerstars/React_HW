import React from 'react';

const ListItem = ({value, checked, id, deleteTodo, isChecked}) => {
    const delTodo = () =>{
        deleteTodo(id);
    }
    const moveToChecked = ()=>{
        checked(id);
    }
    return(
    <div className={isChecked ? "checked" : "tasks" }>
        <p>{value}</p>
        <div className="buttons">
            <button className="list" onClick={delTodo}>Delete</button>
            <button className="list" onClick={moveToChecked}>Checked</button>
        </div>
    </div>
);}


export default ListItem;