import React, { createContext, useReducer, useContext } from 'react';
import { Reducer } from "./Reducer";


const initialState = {
    users: []
}

export const Profile = createContext(initialState)

export const Context = ({ children }) =>
{
    const [state, dispatch] = useReducer(Reducer, initialState)
    const RemoveUser = (id) =>
    {
        dispatch({
            type: "REMOVE",
            payload: id
        })
    }

    const addUser = (user) =>
    {
        dispatch({
            type: "ADDUSER",
            payload: user
        })
    }

    const editUser = (user) =>
    {
        dispatch({
            type: "EDITUSER",
            payload: user
        })
    }
    return (
        <Profile.Provider value={{ users: state.users, RemoveUser, addUser, editUser }}>
            {children}
        </Profile.Provider>
    )
}
