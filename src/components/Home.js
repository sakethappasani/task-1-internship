import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [name, setName] = useState('');
  const [subName, setSubName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleSubmit = () => {
    setSubName(name);
    setName("");
  };

  return (
    <div className="container">
      <div className="input-container">
        <input type='text' value={name} onChange={handleName} placeholder='Enter Name'/>
      </div>
      <button type='button' onClick={handleSubmit}>Submit</button>
      {subName && <h1 className="result">Welcome <span style={{ color: 'green' }}>{subName}</span>!</h1>}
    </div>
  );
}
