import React, { Component } from 'react';

const a={
    margin:'10px',
    height:'100px',
    width:'1000px',
    background: '#b4a7d6',
}

class header extends Component {
    render(){
        return (<div style={a}>{ this.props.children }</div>);
    }
};
export default header;