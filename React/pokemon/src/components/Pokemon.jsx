import React,{useEffect,useState} from "react";
const Pokemon = (props) => {
    const [people, setPeople] = useState([]);
 
    function Pokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }
 
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

