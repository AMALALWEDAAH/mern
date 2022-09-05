import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'
const PersonList = (props) => {
    
    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/people/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    
    return (
    <>
        {props.people.map( (person, i) =>{
        return(
            <>
                <p key={i}>{person.name}</p>
            <Link to={"/people/"+person._id}>
            <button  style={{backgroundColor: " rgb(16, 93, 182)"}}>View</button>
                </Link>
            <button onClick={()=>{handleDelete(person._id)}} style={{backgroundColor: " red"}}>Delete</button>
            </>
        )
    })}
    </>
    );
}
    
export default PersonList;


