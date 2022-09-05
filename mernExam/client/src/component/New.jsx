import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState();
    const[error, setError] = useState([])
    // const [nameError, setNameError] = useState(""); 
    // const [ageError, setAgeError] = useState("");
    
    const onSubmitHandler = e => {
        e.preventDefault();
        // setNameError(null)
        // setAgeError(null)
        // if(name.length < 1){
        //     setNameError("name is required")
        // }
        // else if(name.length<3){
        //     setNameError("name has to be more than 3 characters")
        // }
        // if(age.length < 1){
        //     setAgeError("age is required")
        // }

        // if(nameError == null && ageError == null){
        axios.post('http://localhost:8000/api/users/new', {
            name,
            age
        })
            .then(res=>console.log(res))
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    // }
    }

    return (

        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                {/* {nameError} */}
            </p>
            <p>
                <label>Age</label><br/>
                <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/>
                {/* {ageError} */}
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Form;