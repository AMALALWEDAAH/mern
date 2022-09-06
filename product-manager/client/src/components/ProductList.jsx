import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/products/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err));
    }
    return (
        
        <>
            <h1>All Products:</h1>
            {props.products.map( (product, i) =>
                <p key={i}>
                    <Link to={"/products/"+product._id}>

                    {product.title}
                    </Link>
                    <button onClick={(e)=>{deletePerson(product._id)}}>
                        Delete
                    </button>
                    </p>
)}
        </>
    )
}
    
export default ProductList;

