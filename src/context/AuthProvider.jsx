import axios from "axios";
import React, { createContext, useEffect, useState } from "react";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    const url = 'http://localhost:3000/api'
    // const url = 'https://ph-forum-server.vercel.app/api'

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
        localStorage.removeItem('batch')
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
                localStorage.setItem('batch',response.data.batch||'');
            })
            .catch(error => {
                logOut();
                setLoading(false)
                // throw new Error('Failed to retrieve user details');
            })
            .finally(() => setLoading(false))

    // }

        // return () =>unSubscribe();
    }, [token])


    const allContext = { url, user, login, loading, registerUser, logOut, setToken };
    return (
        <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    );
};


export default AuthProvider;
