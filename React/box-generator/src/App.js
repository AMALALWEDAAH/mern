import React,{useState} from 'react';

import './App.css';
import Colorful from './components/colorful';
function App() {
  const[colorsList,setColorsList]=React.useState([])
  const [inputColor,setInputColor]=useState('')
  const [hight,setHight]=useState()
  const [width,setWidth]=useState()
  function handleChange(e){
    setInputColor(e.target.value)
  }
  function handleChange1(e){
    setHight(e.target.value)
  }
  function handleChange2(e){
    setWidth(e.target.value)
  }
  function addColor(e){
    setColorsList(([...colorsList,inputColor]))
    setInputColor('')
    setWidth()
    setHight()
  }
  return (
    <div className="App">
      <div>
        <label>Color:</label>
        <input value={inputColor} onChange={handleChange} type='text' name='color'/>
        <label>Hight:</label>
        <input value={hight} onChange={handleChange1} type='text' name='hight'/>
        <label>width:</label>
        <input value={width} onChange={handleChange2} type='text' name='width'/>
        <button onClick={addColor}>Add</button>
      </div>
      <div style={{display: 'flex',justifyContent:'center'}}>
        {colorsList.map((color,index)=>  <Colorful color={color} hight={hight} width={width}/>)}

      </div>
    </div>
  );
}

export default App;
