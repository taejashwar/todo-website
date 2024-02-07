"use client";

import Link from 'next/link';
import React, { createContext, useContext, useState } from 'react';

const Context = createContext({user: {}});
export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    return (
        <Context.Provider value={{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export const ToDoButton = ({id, completed}) => {

    const deleteHandler = (id) => {
        alert('Deleting', id);
    }

    return (
        <>
        <input type="checkbox" checked={completed} />
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </>
    )
}

export const LogoutBtn = () => {

    const logoutHandler = () => {
        alert("Logged Out");
    }

    const context = useContext(Context);
    const { user } = context;

    return (
        user.id ? (
            <button className='btn' onClick={logoutHandler}>Logout</button>
        ) : (
            <Link href={'/login'}>Login</Link>
        )    
    )
}
