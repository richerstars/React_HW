import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyles';
import { NotificationContextProvider } from "./components/context/NotificationContext";

ReactDOM.render(
    <NotificationContextProvider>
        <GlobalStyle/>
        <App/>
    </NotificationContextProvider>,
    document.getElementById('root')
)
;
