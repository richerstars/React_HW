import React from 'react';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { StyledMainWrapp } from './components/Form/styled';

const App = () => (
    <StyledMainWrapp>
        <h1> Todo List</h1>
        <Form/>
        <List/>
    </StyledMainWrapp>
);

export default App;
