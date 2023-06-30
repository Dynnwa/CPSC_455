import './App.css';
import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import Card from './Card';
import Popover from './Popover';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);

  const addItem = (item) => {
    const name = 'your_item_id';
    const price = 10.99;

    // Make the POST request
    fetch('/save', {
      method: 'POST',
      body: JSON.stringify({ name, price })
    })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    console.log("here");
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3006/default');
        const data = await response.json();
        dispatch({ type: 'load', payload: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDelete = (name) => {
    fetch(`/delete/${name}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <InputForm addFunction={addItem} />
      {items?.map((item, index) => (
        <>
        <Card name={item.name} description={item.description} price={item.price} image={item.image}></Card>
        {isPopoverVisible && (
          <Popover name={item.name} description={item.description} price={item.price} className="popover-content"></Popover>
        )}
        <button className="button" onClick={handleDelete(item.name)}>Delete {item.name}</button>
        <button className="button" onClick={() => 
        {setIsPopoverVisible(!isPopoverVisible);}}>More info about {item.name}</button>
        </>
      ))}
    </div>
  );
}

export default App;
