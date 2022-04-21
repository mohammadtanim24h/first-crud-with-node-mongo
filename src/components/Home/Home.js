import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("user/add")}>Go to add user</button>
            <hr />
            <h1>Available Users: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>Name: {user.name}, Email: {user.email}</li> )
                }
            </ul>
        </div>
    );
};

export default Home;