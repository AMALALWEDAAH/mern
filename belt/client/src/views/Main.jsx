import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import axios from 'axios';
    
const Main = () => {
    const [people, setPeople] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
            })
            .catch(err => console.error(err));
    },[people]);
    
    return (
        <div>
            <PersonForm/>
        </div>
    )
}
    
export default Main;

