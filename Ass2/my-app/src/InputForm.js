import React, { useState } from 'react';

const InputForm = ({ addFunction }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFunction({
        "name": name,
        "description": description,
        "price": price,
        "image": image
    });
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="text" value={image} onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default InputForm;
