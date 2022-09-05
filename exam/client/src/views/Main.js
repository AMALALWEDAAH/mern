import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import List from '../components/List';


export default ()=>{
    const [elements,setElements]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/new')
        .then(res=>setElements(res.data))
        .catch(err=>console.log("Error: ", err))
    },[])
    return (
        <div>
           <Form/>
           <List elements={elements}/>
        </div>
    )
}

