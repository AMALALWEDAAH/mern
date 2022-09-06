import React from 'react'
import {useParams ,useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    const { removeFromDom } = props;

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/products/' + personId)
            .then(res => {
                history.push("/products")
                removeFromDom(personId)
            }
            
            )
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    });
    return (
        <div>
            <h1>{product.title}</h1>
            <p> Price: $ {product.price}</p>
            <p> Description: {product.desc}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
                    <button onClick={(e)=>{deletePerson(product._id)}}>
                        Delete
                    </button>


        </div>
    );
}
    
export default Detail;

