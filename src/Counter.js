import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const handleIncrease = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter</h1>
      <p className="count-display">Count: {count}</p>
      {count === maxLimit && <p className="limit-msg">You've reached the limit!</p>}
      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
