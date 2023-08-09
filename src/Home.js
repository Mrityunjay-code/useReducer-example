import React, { useEffect, useState } from 'react';
import './style.css'; // Import the CSS file

function Home() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      {record.map((list, index) => (
        <div key={index} className="card">
          <img src={list.image} alt={list.title} />
          <h1>{list.title}</h1>
          <p>{list.category}</p>
          <p>${list.price}</p>
          <div className="card-description">
            <p>{list.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
