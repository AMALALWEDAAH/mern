import React, { useEffect, useState } from 'react'
import PersonList from '../components/PersonList';
import {Link} from "react-router-dom";
import axios from 'axios';
    
const View = () => {
    const [people, setPeople] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
            })
            .catch(err => console.error(err));
    },[people]);
    
    return (
        <>
        <div style={{display:'flex' , justifyContent:'space-evenly'}}>
            <h1>Pirate Crew</h1>
            <Link to={"/people/new"}>
        <button>Add Pirate</button>
        </Link>
        </div>
        <div >
            <PersonList people={people}/>
        </div>
        </>
    )
}
    
export default View;