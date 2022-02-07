import React, {useState, useReducer} from 'react';

const initialState = {user: 'Guest'};
const UserContext = React.createContext();
const SET_USERNAME = 'SET_USERNAME';

const reducer =(state, {payload,type}) =>{
    switch (type){
        case SET_USERNAME:
            return {user: payload || 'Guest'};
        default:
            return state;
    }
}

const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const setUsername = (name)=> dispatch({type: SET_USERNAME, payload:name })
    const {user} = state;
    const contextValue = { user,setUsername }
    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );

};

export {UserContextProvider, UserContext};