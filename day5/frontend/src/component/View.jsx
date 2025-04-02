import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Delete from './Delete';
import Update from './Update'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('http://localhost:9000/users');
        console.log(res);
        setUsers(res.data);
    }

  return (
    <div>
        <h1>Registerd Users List</h1>
        <table style={{border: '2px solid red',backgroundColor: 'greenyellow',width: '100%'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td><Update /></td>
                </tr>
            ))}
        </table>
     </div>
  )
}

export default View