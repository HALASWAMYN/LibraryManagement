import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import ReadUser from "./readUser";

const UserList = () => {
    let [user, setUser] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4018/users")
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[user])
    let handleDelete = (id, name) => {
        fetch(`http://localhost:4018/users/${id}`, {
            method: 'DELETE'
        })
        alert(`${name} has been deleted permanently`)
    }
    let navigate = useNavigate()
    let read = (id) => {
        navigate(`/admin/user-list/${id}`)
    }

    return (
        <div className="userList">
            <h1>User List:{user.length}</h1>

            <div className="user_section">
                {user.map(data => (
                    <div style={{ display: 'inline-table', border: '2px solid black', margin: '5px', height: '250px', width: '400px', backgroundColor: 'beige' }} className="user_card">
                        <h4><b>Name:</b> {data.name}</h4>
                        <p><b>Age:</b> {data.age}</p>
                        <p><b>Email:</b> {data.email}</p>
                        <p><b>phoneNumber:</b> {data.phoneNumber}</p>
                        <button style={{ backgroundColor: 'white', color: 'blue', borderRadius: '5px', border: '1px solid blue', marginBottom: '5px', marginRight: '5px' }} onClick={() => read(data.id)}>Read More</button>
                        <button style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px', border: '0', marginBottom: '5px' }} onClick={() => handleDelete(data.id, data.name)}>Delete</button>



                    </div>
                ))}

            </div>
            .<ReadUser data={user.id} />
        </div>
    );
}

export default UserList;