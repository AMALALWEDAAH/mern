import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
    const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[products]);
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}
    
export default Main;

