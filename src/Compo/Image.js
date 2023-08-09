import React, { useState } from 'react';

const Image = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0); 
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1); 
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ maxWidth: '100%', maxHeight: '400px' }}
      />
      <div>
        <button onClick={handlePrevImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
    </div>
  );
};

export default Image;
