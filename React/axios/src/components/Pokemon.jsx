import React,{useState} from "react";
import axios from 'axios';
const Pokemon = (props) => {
    const [people, setPeople] = useState([]);

    const Pokemon=(e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then((response)=>{setPeople(response.data.results);})

    };

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