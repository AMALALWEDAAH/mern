import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState("");
    const [lasttName, setLasttName] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lasttName,email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 ) {
            setfirstNameError("field must be at least 2 characters.");
        }else{
            setfirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLasttName(e.target.value);
        if(e.target.value.length < 2) {
            setlastNameError("field must be at least 2 characters.");
        }else{
            setlastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("field must be at least 5 characters.");
        }else{
            setEmailError("");
        }}
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 ) {
            setPasswordError("The passwords must be at least 8 characters.");
        }else{
            setPasswordError("");
        }
    }
        const handleconfirmpassword = (e) => {
            setConfirmPassword(e.target.value);
            if (password!==e.target.value) {
                setconfirmpasswordError("The passwords must match.");
            }else{
                setconfirmpasswordError("");
            }}
   
   
    return(
        <><form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLastName} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={handleconfirmpassword} />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        </>
    );
};

export default UserForm;