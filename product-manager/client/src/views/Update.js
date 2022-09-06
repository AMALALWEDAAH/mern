import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams ,useHistory} from "react-router-dom";
    
const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDesc(res.data.desc);
                setPrice(res.data.price);
               
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            desc,
            price
        })
            .then(res => {console.log(res)
            history.push("/products")}
            )
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                
                <p>
                    <label>title</label><br />
                    <input type="text" 
                    
                    onChange={(e) => { setTitle(e.target.value) }}
                    value={title} 
                    />
                </p>
                <p>
                    <label>desc</label><br />
                    <input type="text" 
                    
                    onChange={(e) => { setDesc(e.target.value) }}
                    value={desc} 
                    />
                </p>
                <p>
                    <label>price</label><br />
                    <input type="text" 
                    
                    onChange={(e) => { setPrice(e.target.value) }} 
                    value={price} 
                    />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

