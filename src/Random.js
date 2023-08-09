
import React, { useState } from 'react';

const Random = () => {

  const [color, setColor] = useState(generateRandomColor());


  function generateRandomColor() {
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    return randomColor;
  }


  function getRandomNumber() {
    return Math.floor(Math.random() * 256);
  }

  
  function handleButtonClick() {
    const randomColor = generateRandomColor();
    setColor(randomColor);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          margin: '20px auto',
        }}
      />
      <button onClick={handleButtonClick}>Change Color</button>
    </div>
  );
};

export default Random;



