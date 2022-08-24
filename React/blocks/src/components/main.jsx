import React, { Component } from 'react';

const a={
    margin:'10px',
    height:'500px',
    width:'500px',
    background: '#e06666',
}

class header extends Component {
    render(){
        return (<div style={a}>{ this.props.children }</div>);
    }
};
export default header;