import React, { useState, useContext } from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from '../context/context';

const RegAndLog = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [error, setError] = useState([])
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [cpasswordError, setCpasswordError] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, registerSetEmail] = useState("");
    const [registerPassword, registerSetPassword] = useState("");
    const context= useContext(MyContext);
    const history = useHistory();
    
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName,
            lastName,
            "email": registerEmail,
            "password": registerPassword,
            confirmPassword: cpassword
        })
            .then(res => {
                console.log(res)
                // setName(res.data)
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

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", {
            "email": loginEmail,
            "password": loginPassword
        })
            .then(res => {
                context.setName(res.data)
                console.log(res);
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

    const handleFname = (e) => {
        setFirstName(e.target.value);
        context.setName(e.target.value)
        if (e.target.value.length < 2) {
            setFnameError("First Name be at least 2 characters");
        } else {
            setFnameError("");
        }
    }
    const handleLname = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLnameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLnameError("Last Name be at least 2 characters");
        } else {
            setLnameError("");
        }
    }
    const handleEmail = (e) => {
        registerSetEmail(e.target.value);
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.value.length == 0) {
            setEmailError("Email is required")
        } else if (!e.target.value.match(mailformat)) {
            setEmailError("You have entered an invalid email address!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        registerSetPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }
    const handleCpassword = (e) => {
        setCpassword(e.target.value);
        if (e.target.value.length < 1) {
            setCpasswordError("Confirm password is required!");
        } else if (e.target.value !== registerPassword) {
            setCpasswordError("Passwords must match");
        } else {
            setCpasswordError("");
        }
    }

    return (
        <div className='d-flex'>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", margin: "100px" }}>
                <h1>Login</h1>
                {/* {error.map((error, i) => <p className='text-danger' key={i}>{error}</p>)} */}
                <label>Email: </label>
                <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
                <label>Password: </label>
                <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
                <input type="submit" />
            </form>
            <form onSubmit={onSubmitHandler} style={{ display: "flex", flexDirection: "column", margin: "100px" }}>
                <h1>Register</h1>
                {error.map((error, i) => <p className='text-danger' key={i}>{error}</p>)}
                <p>
                    <label>First Name</label><br />
                    <input type="text" onChange={handleFname} value={firstName} />
                    <span style={{ color: 'red' }}>{fnameError}</span>
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" onChange={handleLname} value={lastName} />
                    <span style={{ color: 'red' }}>{lnameError}</span>
                </p>
                <p>
                    <label>Email</label><br />
                    <input type="text" onChange={handleEmail} value={registerEmail} />
                    <span style={{ color: 'red' }}>{emailError}</span>
                </p>
                <p>
                    <label>password</label><br />
                    <input type="text" onChange={handlePassword} value={registerPassword} />
                    <span style={{ color: 'red' }}>{passwordError}</span>
                </p>
                <p>
                    <label>Confirm Password: </label><br />
                    <input type="text" onChange={handleCpassword} />
                    {
                        cpasswordError ?
                            <span style={{ color: 'red' }}>{cpasswordError}</span> :
                            ''
                    }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default RegAndLog;