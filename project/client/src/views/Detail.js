import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

const Detail = (props) => {
    const [pirate, setPirate] = useState({})
    const [PegLeg, setPegLeg] = useState(true);
    const [EyePatch, setEyePatch] = useState(true);
    const [HookHand, setHookHand] = useState(true);
    const [error, setError] = useState([])
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deletePirate = (id) => {
        axios.delete('http://localhost:8000/api/' + id + '/delete')
            .then(res => {
                setPirate("")
                history.push('/dashboard');
            })
            .catch(err => console.error(err));
    }
    const handleChange = () => {

        axios.put('http://localhost:8000/api/' + id + '/edit', pirate)
            .then(res => {
                setPirate(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='p-5 d-flex justify-content-center'>
            <div className="card col-5 p-4 bg-light text-center">
            <Link className='my-2 btn btn-dark col-md-12' to="/dashboard">Home</Link>
                <img src={pirate.image} alt="pirate"/>
                <form>
                <h1>{pirate.name}</h1>
                {/* <h3>About</h3> */}
                <div className='text-start'>
                <p>Location: {pirate.location}</p>
                <p>Price: {pirate.price}</p>
                <p>Phone: {pirate.phone}</p>
                <p>Description: {pirate.desc}</p>
                {/* <p>
                    Peg Leg: {pirate.PegLeg? "Yes" : "No"}
                    <button className='btn btn-outline-dark btn-sm mx-2' onClick = {(e) => {pirate.PegLeg = !pirate.PegLeg; handleChange()}}>{pirate.PegLeg? "No" : "Yes"}</button>
                </p>
                <p>Eye Patch: {pirate.EyePatch? "Yes" : "No"}
                <button className='btn btn-outline-dark btn-sm mx-2' onClick = {(e) => {pirate.EyePatch = !pirate.EyePatch;handleChange()}}>{pirate.EyePatch? "No" : "Yes"}</button>
                </p>
                <p>Hook Hand: {pirate.HookHand? "Yes" : "No"}
                <button className='btn btn-outline-dark btn-sm mx-2' onClick = {(e) => { pirate.HookHand = !pirate.HookHand;handleChange()}}>{pirate.HookHand? "No" : "Yes"}</button>
                </p> */}
            </div>
            </form>
            </div>
        </div>
    )
}

export default Detail;