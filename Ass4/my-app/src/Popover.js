import React from 'react';

const Popover = ({ name, description, price, image }) => {
  return (
    <div className="popover">
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>description: {description}</p>
    </div>
  );
};

export default Popover;