import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MyContext from '../context/context';
import { useContext } from 'react'

const List = (props) => {
    // const { removeFromDom } = props;
const context  = useContext(MyContext);

    const deletePirate = (id) => {
        axios.delete('http://localhost:8000/api/' + id + '/delete')
            .then(res => {
                console.log(res.data)
                alert("Product is deleted!")
            })
            .catch(err => console.error(err));
    }
    return (
        <>
            <div className='col-md-8'>
                <div className="card p-4 bg-light shadow-lg">
                <h3>Hello, {context.name}</h3>
                    <h1>P</h1>
                    <Link className='btn btn-dark' to="/create">Add Product</Link>
                    <table className="table table-striped my-2">
                        <tbody className='bg-dark'>
                            {props.pirate.map((pirates, i) =>
                                <tr key={i}>
                                    <td>
                                    <img src= {pirates.image}  alt="pirate" width = "120" height='120'/>
                                    </td>
                                    <td className='text-light'>
                                    <h3 className='m-2'>{pirates.name}</h3>
                                    </td>
                                    <td className='p-1'>
                                        <Link to={"/" + pirates._id} className="btn m-3 btn-sm btn-success">View Product</Link>
                                        <button className='btn btn-sm btn-danger' onClick={(e) => { deletePirate(pirates._id) }}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List;

