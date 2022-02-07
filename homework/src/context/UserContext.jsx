import React, {useState} from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("Guest");
    const contextValue = { user: user, setUser: setUsername }
    const setUsername = (name)=> {
        setUser(name || "Guest")
    }

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};