import React, {useState} from "react";
const Context = React.createContext({});

const NotificationContextProvider= ({children}) => {
    const [state, setState] = useState ({
        type: '',
        message: '',
    });

    const showNotification = ({type, message}) => {
        setState({type, message});
        setTimeout(clearNotification, 3000);
    };

    const clearNotification = ()=> {
        setState({
            type: '',
            message: '',
        });
    };

    return (
        <Context.Provider value={ {notification: {...state}, showNotification }}>
            {children}
        </Context.Provider>
    );
};

export {NotificationContextProvider, Context as NotificationContext};
