import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from '../components/List'
import New from '../components/New'
const Main = () =>{
    const [users, setUsers] = useState([])
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/users")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err))
    },[users])

    return (
        <>
        <New />
        <List users={users} />
        </>
    );
}
export default Main;