import React from 'react';
import './Card.css';

const Card = ({ name, description, price, image }) => {
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>description: {description}</p>
      <img src={image} alt="Image"></img>
    </div>
  );
};

export default Card;