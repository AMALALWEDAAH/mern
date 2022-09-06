import React, { useEffect, useState } from 'react';
import List from '../components/List';
import axios from 'axios';

const Main = (props) => {
    const [pirate, setPirate] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(res => { setPirate(res.data)})
            .catch(err => console.error(err));
    }, [pirate]);//the products in the array renders the products without needing to refresh the page

    return (
        <div className='d-flex my-4 justify-content-evenly'>
            <List pirate={pirate} />
        </div>
    )
}
export default Main;