import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Detail = () => {
    const [person, setPerson] = useState({})
    const { id } = useParams();
useEffect( ()=>   {
    axios.get("http://localhost:8000/api/people/"+id)
    .then(res => setPerson(res.data))
    .catch(err => console.error(err))
},[id])
return (
    <>
    <img src={person.img} alt="Semrush logo 1" width="500" height="600"></img>
    
    <p>Pirate Name: {person.name}</p>
    <p># of Treasure Cheste: {person.num}</p>
    <p>Pirate Catch: {person.catchs}</p>
    </>
);
}
export default Detail;