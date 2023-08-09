import React, { useState } from 'react';

const Star = () => {
  const [rating, setRating] = useState(0); 

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <p >Selected rating: {rating}</p>
      <div>
        {[1, 2, 3, 4, 5].map((number) => (
          <Start
            key={number}
            isSelected={number <= rating}
            onClick={() => handleStarClick(number)}
          />
        ))}
      </div>
    </div>
  );
};

const Start = ({ isSelected, onClick }) => (
  <span
    style={{ cursor: 'pointer', color: isSelected ? 'gold' : 'gray' }}
    onClick={onClick}
  >
    ★
  </span>
);

export default Star;
