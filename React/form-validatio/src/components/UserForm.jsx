import React, { useReducer } from 'react';
 
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }};
function reducer(state, action) {
    return {
        ...state,
        [action.type]:{
            value:action.payload,
            error:action.error},
        };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        let error = null
        if(name==="firstName"){
            if(value.length<3){
                error="First Name must be at least 3"
            }
        }
        if(name==="lastName"){
            if(value.length<3){
                error="Last Name must be at least 3"
            }
        }
        if(name==="email"){
            if(value.length<5){
                error="Email must be at least 5"
            }
        }
        dispatch({
            type: name,
            payload: value,
            error: error});
        }
        return (
        <div>
            <div style={{margin:'5%'}}>
                <label>
                    <span>First Name:</span>{' '}
                        <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                        />
                        {state.firstName.error !== null && (
                                <p className="error" style={{color:'red'}}>{state.firstName.error}</p>
                            )}
                </label>
            </div>
             <div style={{margin:'5%'}}>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                    name="lastName"
                    value={state.lastName.value}
                    onChange={handleChange}
                    />
                    {state.lastName.error !== null && (
                            <p className="error" style={{color:'red'}}>{state.lastName.error}</p>
                        )}
                </label>
            </div>
            <div style={{margin:'5%'}}>
                <label>
                    <span>Email:</span>{' '}
                    <input
                    name="email"
                    value={state.email.value}
                    onChange={handleChange}
                    />
                    {state.email.error !== null && (
                            <p className="error" style={{color:'red'}}>{state.email.error}</p>
                        )}
                </label>
            </div>
            <input type="submit" value="Submit"  />
        </div>
            );
}