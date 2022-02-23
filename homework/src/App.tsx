import React from 'react';
import Form from "./components/Form/index";
import List from "./components/List/index";
import {StyledMainWrapp, StyledTheme } from './components/Form/styled';
import Notification from "./components/Notification/index";
import { GlobalStyle } from "./GlobalStyles";

type TAppProps = {
    dark: boolean,
    changeTheme: () => void
};

const App = ({dark,changeTheme}:TAppProps) => {
    return(
        <>
            <GlobalStyle dark={dark}/>
            <Notification/>
            <StyledMainWrapp>
                <StyledTheme onClick={changeTheme}>Change theme</StyledTheme>
                <h1> Todo List</h1>
                <Form/>
                <List/>
            </StyledMainWrapp>
        </>
    );
};

export default App;
