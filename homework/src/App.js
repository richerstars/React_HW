import React from 'react';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import {StyledMainWrapp, StyledTheme } from './components/Form/styled';
import Notification from "./components/Notification/Notification";
import { GlobalStyle } from "./GlobalStyles";

const App = () => (
    <>
        <GlobalStyle/>
        <Notification/>
        <StyledMainWrapp>
            <StyledTheme>Change theme</StyledTheme>
            <h1> Todo List</h1>
            <Form/>
            <List/>
        </StyledMainWrapp>
    </>
);

export default App;
