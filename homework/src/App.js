import React from 'react';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import {StyledMainWrapp, StyledTheme } from './components/Form/styled';
import Notification from "./components/Notification/Notification";
import { GlobalStyle } from "./GlobalStyles";
import { changeTheme } from "./store/theme/actions";
import { useDispatch,useSelector } from "react-redux";
import { selectTheme } from "./store/theme/selectors";

const App = () => {
    const dispatch = useDispatch();
    const handleClickTheme = () => dispatch(changeTheme());
    const {dark} = useSelector(selectTheme);
    return(
        <>
            <GlobalStyle dark={dark}/>
            <Notification/>
            <StyledMainWrapp>
                <StyledTheme onClick={handleClickTheme}>Change theme</StyledTheme>
                <h1> Todo List</h1>
                <Form/>
                <List/>
            </StyledMainWrapp>
        </>
    );
}

export default App;
