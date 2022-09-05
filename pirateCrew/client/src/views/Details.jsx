import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [person, setPerson] = useState({})
    const { id } = useParams();
useEffect( ()=>   {
    axios.get("http://localhost:8000/api/people/"+id)
    .then(res => setPerson(res.data))
    .catch(err => console.error(err))
},[id])
return (
    <>
    <p>Pirate Name: {person.name}</p>
    <p>Image Url: {person.img}</p>
    <p># of Treasure Cheste: {person.num}</p>
    <p>Pirate Catch: {person.catchs}</p>
    </>
);
}
export default Details;