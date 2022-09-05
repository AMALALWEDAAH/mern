import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [user, setUser] = useState({})
    const {id} = useParams()
    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/users/"+id)
        .then(res => setUser(res.data))
        .catch(err => console.error(err))
    },[id])
    return (
        <>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        </>
    );
}
export default Details;