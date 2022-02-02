import React, {useState} from 'react';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import {StyledMainWrapp} from './components/Form/styled';

const App = () => {
    const [todos, setTodos] = useState([{value: 'test', id: 1, isChecked: false}]);

    const addListItem = (values) => {
        setTodos([...todos, values]);
    }
    const removeListItem = (id) => {
        setTodos(todos.filter(el => el.id !== id));
    }
    const changeChecked = (id) => {
        setTodos(todos.map(el => el.id === id ? {...el, isChecked: !el.isChecked} : el));
    }

    return (
        <StyledMainWrapp>
            <h1> Todo List</h1>
            <Form addItem={addListItem}/>
            <List todos={todos} changeTodo={changeChecked} deleteTodo={removeListItem}/>
        </StyledMainWrapp>
    );
};

export default App;
