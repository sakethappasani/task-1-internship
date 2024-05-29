import React, { useState } from 'react';
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <p className="counter-value">The count is: {count}</p>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increment}>
          +1
        </button>
        <button className="counter-button" onClick={decrement}>
          -1
        </button>
      </div>
    </div>
  );
}
