import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = localStorage.getItem('token'); // Use localStorage
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = localStorage.getItem('user'); // Use localStorage
        const user_details = JSON.parse(userString);
        return user_details;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        localStorage.setItem('token', JSON.stringify(token)); // Use localStorage
        localStorage.setItem('user', JSON.stringify(user));   // Use localStorage
        setToken(token);
        setUser(user);
        navigate('/dashboard');
    }
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        getUser,
        http,
        logout
    };
}

export default AuthUser;
