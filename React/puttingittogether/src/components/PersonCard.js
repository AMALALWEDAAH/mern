import React, { Component } from 'react';
class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {age: this.props.age
        };

    }
    Incremnt=()=>{
        this.setState({age:this.state.age+1});
    }
    render(){
        return(
            <>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Agi: {this.state.age}</p>
            <p>Hair Clolr: {this.props.hairColor}</p>
            <button onClick={this.Incremnt}>Click Me</button>
            </>
        );
    }
}
export default PersonCard;