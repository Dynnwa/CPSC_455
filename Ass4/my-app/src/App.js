import './App.css';
import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import Card from './Card';
import Popover from './Popover';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);

  const addItem = async (item) => {
    const res = await axios.post(`http://localhost:3006/save`, { name: item.name, price: item.price, description: item.description, image: item.image});
    dispatch({ type: 'add', payload: res.data });
  };

  useEffect(() => {
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

  const handleDelete = async (item) => {
    const id = item._id;
    const res = await axios.delete(`http://localhost:3006/del/` + id).catch((err)=> {});
    dispatch({ type: 'del', payload: item });
  };

  const update = async (item) => {
    const id = item._id;
    console.log(id);
    await axios.put(`http://localhost:3006/item/${id}`, item);
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
        <button className="button" onClick={(item) => {handleDelete(items[index])}}>Delete {item.name}</button>
        <button className="button" onClick={(item) => {update(items[index])}}>increase price {item.name}</button>
        <button className="button" onClick={() => 
        {setIsPopoverVisible(!isPopoverVisible);}}>More info about {item.name}</button>
        </>
      ))}
    </div>
  );
}

export default App;
