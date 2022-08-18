import React,{Component} from 'react'

class PersonCard extends Component{
    render(){
        return(
            <>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Agi: {this.props.age}</p>
            <p>Hair Clolr: {this.props.hairColor}</p>
            </>
        );
    }
}
export default PersonCard;