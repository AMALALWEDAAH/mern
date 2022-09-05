import React, { useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
const PersonForm =props => {
    
    const [name, setName] = useState(""); 
    const [num, setNum] = useState(""); 
    const [img, setImg] = useState(""); 
    const [catchs, setCatchs] = useState(""); 
    const[error, setError] = useState([])

    const onSubmitHandler = e => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/people', {
            name,
            num,
            img,
            catchs,
        })
        .then(res=>console.log(res))
        .catch(err=> {
            const errorObj = err.response.data.errors;
            let errArr = []
            for (const key of Object.keys(errorObj)){
                errArr.push(errorObj[key].message)
            }
            setError(errArr)
        })
    }
    return (
        < div style={{backgroundColor: "orange"}}>
        <div style={{display:'flex' , justifyContent:'space-evenly' , backgroundColor: "brown"}}>
            <h1> Add Pirate</h1>
            <Link to={"/people/"}>
            <button style={{backgroundColor: " rgb(16, 93, 182)"}}>Crew Board</button>
            </Link>
        </div>

        <form onSubmit={onSubmitHandler}>
        {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label>Pirate Name:</label><br/>
                <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Image Url:</label><br/>
                <input type="text" onChange={e=>setImg(e.target.value)} value={img}/>
            </p>
            <p>
                <label># of Treasure Cheste:</label><br/>
                <input type="text" onChange={e=>setNum(e.target.value)} value={num}/>
            </p>
            <p>
                <label>Pirate Catch:</label><br/>
                <input type="text" onChange={e=>setCatchs(e.target.value)} value={catchs}/>
            </p>
            <p>
                <label for="Crews">Crew Position:</label>

                <select name="Crews" id="Crews">
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </p>
            <input type="submit" value="Add Pirate" style={{backgroundColor: " rgb(16, 93, 182)"}}/>
        </form></div>
    )
}

export default PersonForm;