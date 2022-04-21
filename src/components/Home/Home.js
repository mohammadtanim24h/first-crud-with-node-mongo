import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("user/add")}>Go to add user</button>
        </div>
    );
};

export default Home;