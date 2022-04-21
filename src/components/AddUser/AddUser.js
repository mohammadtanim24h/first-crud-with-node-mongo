import React from "react";

const AddUser = () => {
    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };

        // send data to the server
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
            });
    };
    return (
        <div>
            <h2>Add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Name" required />{" "}
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />{" "}
                <br />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;
