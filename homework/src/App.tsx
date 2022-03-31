import React, { useEffect } from 'react';
import Form from "./components/Form";
import List from "./components/List";
import {StyledMainWrapp, StyledTheme } from './components/Form/styled';
import Notification from "./components/Notification/index";
import { GlobalStyle } from "./GlobalStyles";
import { useDispatch} from "react-redux";
import { fetchAddTodo } from "./store/todos/actions";
type TAppProps = {
    dark: boolean,
    changeTheme: () => void
};

const App = ({dark,changeTheme}:TAppProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAddTodo());
    },[]);
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
