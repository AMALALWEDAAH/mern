import React,{useState} from "react";
import axios from 'axios';
const Pokemon = () => {
    const [people, setPeople] = useState([]);

    function Pokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807').then(response=>{
            console.log(response);
        })
    }//delete it if it doesn't work

    return (

        <div>
            <button onClick={Pokemon}>Fetch Pokemon</button>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}
export default Pokemon;

