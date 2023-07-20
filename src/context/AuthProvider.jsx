import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);
    
    const url = 'http://localhost:3000/api'

    //login
    const login = (doc) => {
        return axios.post(`${url}/users/login`, doc)
    }
    //register
    const registerUser = (doc) => {
        return axios.post(`${url}/users/register`, doc)
    }

    //user logout
    const logOut = () => {
        setUser({});
        setToken(null);
        localStorage.removeItem('token')
    };

 

    useEffect(() => { 
        // const unSubscribe = () => { 
            axios.get(`${url}/users`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.log(error);
                    throw new Error('Failed to retrieve user details');
                });
                setLoading(false)
        // }

        // return () =>unSubscribe();
    }, [token])


    const allContext = { user, login, login, registerUser, logOut,setToken };
    return (
        <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
