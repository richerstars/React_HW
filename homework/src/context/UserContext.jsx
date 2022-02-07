import React, {useState} from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState("Guest");

    const setUsername = (name)=> {
        setUser(name || "Guest")
    }

    return (
        <UserContext.Provider value={{ user: user, setUser: setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContextProvider, UserContext};