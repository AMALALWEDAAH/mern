import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

const List = (props) => {

    const handleDelete = (id) =>{
        axios.delete("http://localhost:8000/api/users/delete/"+id)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <>
        {
            props.users.map((user,i) =>{
                return (
                    <>
                    <Link to={"/user/"+user._id}><p key={i}>{user.name} - {user.age}</p></Link>
                    <Link to={"/edit/"+user._id}>Edit</Link>
                    <button onClick={()=>{handleDelete(user._id)}}>Delete</button>
                    </>
                )
            })
        }
        </>
    );
}
export default List;