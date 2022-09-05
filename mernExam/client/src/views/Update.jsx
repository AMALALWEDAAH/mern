import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'


const Update = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState();
    const[error, setError] = useState([])

    const history = useHistory();
    const {id} = useParams();
    // const [user, setUser] = useState({})

    useEffect( ()=>   {
        axios.get("http://localhost:8000/api/users/"+id)
        .then(res => {setName(res.data.name) 
            setAge(res.data.age)})
        .catch(err => console.error(err))
    },[id])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/users/update/'+id, {
            name,
            age
        })
            .then(
                console.log("done")
                // history.push("/users")
            )
            .catch(err=> {
                console.log(err.response.data.errors)
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })          
            
    }
    return (

        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}

            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Age</label><br/>
                <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Update;