import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    
    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const onSubmitHandler = e => {
        
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products', {
            title,
            desc,
            price
        })
            .then(res=>{console.log(res);
            setTitle('');
            setDesc('');
            setPrice('');
    })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

