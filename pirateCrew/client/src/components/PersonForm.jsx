import React, { useState } from 'react'
import axios from 'axios';
const PersonForm =props => {
    
    const [name, setName] = useState(""); 
    const [img, setImg] = useState(""); 
    const [num, setNum] = useState(""); 
    const [catchs, setCatchs] = useState(""); 

    const onSubmitHandler = e => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/people', {
            name,
            img,
            num,
            catchs,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        < div style={{backgroundColor: "orange"}}>
        <div style={{display:'flex' , justifyContent:'space-evenly' , backgroundColor: "brown"}}>
            <h1> Add Pirate</h1>
            <button style={{backgroundColor: " rgb(16, 93, 182)"}}>Crew Board</button>
        </div>

        <form onSubmit={onSubmitHandler}>
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
            <input type="submit" value="Add Pirate" style={{backgroundColor: " rgb(16, 93, 182)"}}/>
        </form></div>
    )
}

export default PersonForm;