import AuthUser from "./AuthUser";
import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// Import Link from react-router-dom if you are using React Router
import User from "./user";

const Users = () => {
    const { http } = AuthUser();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        http.get('/getusers').then((res) => {
            if (res.data.status !== 401) {
                setUsers(res.data.user); // Assuming res.data is an array of user objects
            }
        });
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
