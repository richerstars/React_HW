import React, {useState} from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("Guest");
    const setUsername = (name)=> {
        setUser(name || "Guest")
    }
    const contextValue = {user,setUsername }
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};