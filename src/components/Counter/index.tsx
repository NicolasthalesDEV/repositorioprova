import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('Incrementando...');
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    console.log('Decrementando...');
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
