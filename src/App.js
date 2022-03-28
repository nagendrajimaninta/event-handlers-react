import "./styles.css";
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState("");
  const [name1,setName1] = useState("");
  const handleSubmit = () => {
    
    alert(`The name you entered was: ${name}`)
    setName("");
  }

  return (
    <>
    <textarea value={name1} onChange={(e)=>setName1(e.target.value)}></textarea>
    <h2>{name1}</h2>
    
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>{name}</h3>
      </label>
      <input type="submit" />
    </form>
    </>
  );
}

export default function App() {
  const [car,setCar] = useState("Bently");
  let handlecar =(event)=>{
    setCar(event.target.value);
  }
  return (
    <div className="App">
      <select value={car} onChange={handlecar}>
        <option value="Volvo">Volvo</option>
        <option value="Benz">Benz</option>
        <option value="Audio">Audio</option>
        <option value="Bmw">Bmw</option>
      </select>
      <h2>{car}</h2>
      <MyForm />
      </div>
  );
}
