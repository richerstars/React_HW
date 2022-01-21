import React from 'react';

const ListItem = ({title, checked, id, deleteTodo, isChecked}) => {
    const handleDelTodo = () => deleteTodo(id);
    const handleMoveToChecked = () => checked(id);
    return (
        <div className={isChecked ? "checked" : "tasks"}>
            <p>{title}</p>
            <div className="buttons">
                <button className="list" onClick={handleDelTodo}>Delete</button>
                <button className="list" onClick={handleMoveToChecked}>Checked</button>
            </div>
        </div>
    );
};


export default ListItem;
