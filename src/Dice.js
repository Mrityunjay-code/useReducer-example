import React, { useReducer } from 'react';


const Generate = 'Generate';


const randomReducer = (state, action) => {
  switch (action.type) {
    case Generate:
      return Math.floor(Math.random() * 6) + 1;
    default:
      return state;
  }
};

const Dice = () => {
  const [randomNumber, dispatch] = useReducer(randomReducer, 1);

  const handle = () => {
    dispatch({ type: Generate });
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={handle}>Generate</button>
    </div>
  );
};

export default Dice;
