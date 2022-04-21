import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    
    const handleUserDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete the user?");
        if(proceed){
            console.log('Deleting user', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    console.log("deleted successfully")
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate("user/add")}>Go to add user</button>
            <hr />
            <h1>Available Users: {users.length}</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        Name: {user.name}, Email: {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
