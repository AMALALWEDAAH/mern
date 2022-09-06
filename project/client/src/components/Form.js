import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '../context/context';

export default (props) => {
    const options = ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey']
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [error, setError] = useState([])
    const [image, setImage] = useState("");
    const [imageError, setImageError] = useState("");
    const [price, setNumTreasure] = useState("");
    const [treasureError, setTreasureError] = useState("");
    const [location, setPhrase] = useState("");
    const [phraseError, setPhraseError] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setPosition] = useState("");
    const [PegLeg, setPegLeg] = useState(true);
    const [EyePatch, setEyePatch] = useState(true);
    const [HookHand, setHookHand] = useState(true);
    const [userId, setUserId] = useState('');
    const [captainExists, setCaptainExists] = useState(false);
    const history = useHistory();
    const context = useContext(MyContext);
    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then(response => {
                console.log(response.data)
                setCaptainExists(response.data.filter(pirate => pirate.Position === "Captain").length > 0)
            })
            .catch(err => console.error(err));
    }, []);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        // if (captainExists ===true && Position === "Captain") {
        //     setError(["There can only be one captain"])
        // }
        // else {
        axios.post('http://localhost:8000/api/create', {
            name,
            image,
            price,
            desc,
            location,
            phone,
            "userId":context.name,
        })
            .then(res => {
                console.log(res)
                history.push('/dashboard')
            })
            .catch(err => {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)) {
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }
    const handleName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 1) {
            setNameError("Name is required!");
        } else if (e.target.value.length < 3) {
            setNameError("Name should be at least 3 characters");
        } else {
            setNameError("");
        }
    }
    const handleImage = (e) => {
        setImage(e.target.value);
        if(e.target.value.length == 0) {
            setImageError("Image is required!");
        }else{
            setImageError("");
        }
    }
    const handleTreasure = (e) => {
        setNumTreasure(e.target.value);
        if(e.target.value < 0) {
            setTreasureError("Treasure Number is required!");
        }else{
            setTreasureError("");
        }
    }
    const handlePhrase = (e) => {
        setPhrase(e.target.value);
        if(e.target.value.length < 2) {
            setPhraseError("Phrase be at least 2 characters");
        }else{
            setPhraseError("");
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className="card mx-4 bg-light col-6 my-3 shadow-lg">
                <h1 className='m-3'>Add Product</h1>
                <div className='text-end'>
                <Link className='mx-3 btn btn-dark col-md-3' to="/dashboard">Home</Link>
                </div>
                <form className='m-4' onSubmit={onSubmitHandler}>
                    {/* <p>Add Pirate:</p> */}
                    {error.map((error, i) => <p className='text-danger' key={i}>{error}</p>)}
                    {/* use it only if i want to display backend error */}
                    <p>
                        <label className='form-label'>Product Name</label><br />
                        <input type="text" className='form-control' onChange={handleName} value={name} />
                        {
                            nameError ?
                                <p className='text-danger'>{nameError}</p> :
                                ''
                        }
                    </p>
                    <p>
                        <label className='form-label'>Image Url</label><br />
                        <input type="text" className='form-control'  onChange={handleImage} value={image} />
                        {
                            imageError ?
                                <p className='text-danger'>{imageError}</p> :
                                ''
                        }
                    </p>
                    <p>
                    <label className='form-label'>Price:</label><br />
                        <input type="number" className='form-control' onChange={handleTreasure} value={price} />
                        {
                            treasureError ?
                                <p className='text-danger'>{treasureError}</p> :
                                ''
                        }
                    </p>
                    <p>
                    <label className='form-label'>Location:</label><br />
                        <input type="text" className='form-control'  onChange={(e)=> setPhrase(e.target.value)} value={location} />
                        {
                            phraseError ?
                                <p className='text-danger'>{phraseError}</p> :
                                ''
                        }
                    </p>
                    <p>
                        <label className='form-label'>Phone</label><br />
                        <input type="text" className='form-control' onChange={(e)=> setPhone(e.target.value)} value={phone} />
                        {
                            imageError ?
                                <p className='text-danger'>{imageError}</p> :
                                ''
                        }
                    </p>
                    <p>
                        <label className='form-label'>Description</label><br />
                        <textarea className='form-control' onChange={(e)=> setPosition(e.target.value)} value={desc} />
                        {
                            imageError ?
                                <p className='text-danger'>{imageError}</p> :
                                ''
                        }
                    </p>
                    {/* <p>
                    <label className='form-label'>Description:</label><br />
                        <select value={desc} className='form-select' onChange={e => setPosition(e.target.value)}>
                            {options.map((option, idx) =>
                                <option key={idx} value={option}>{option}</option>
                            )}
                        </select>
                    </p> */}
                    {/* <p>
                        <input type="checkbox" onChange={e => setPegLeg(e.target.checked)} checked={PegLeg} /> Pegleg <br />
                        <input type="checkbox" onChange={e => setEyePatch(e.target.checked)} checked={EyePatch} /> Eye Patch<br />
                        <input type="checkbox" onChange={e => setHookHand(e.target.checked)} checked={HookHand} /> Hook Hand<br />
                    </p> */}
                    <div className='text-end'>
                        {/* <Link to="/" className='btn btn-info mx-2' >Cancel</Link> */}
                        <input type="submit" value='Add' className='btn btn-dark' />
                    </div>
                </form>
            </div>
        </div>
    )
}

