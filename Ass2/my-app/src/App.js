import './App.css';
import React, { useState } from 'react';
import InputForm from './InputForm';
import Card from './Card';
import Popover from './Popover';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);

  const addItem = (item) => {
    dispatch({ type: 'add',
    payload: item});
  };

  // const delItem = (index) => {
  //   dispatch({ type: 'del',
  //   payload: index});
  // };

  return (
    <div className="App">
      <InputForm addFunction={addItem} />
      {items?.map((item, index) => (
        <>
        <Card name={item.name} description={item.description} price={item.price} image={item.image}></Card>
        {isPopoverVisible && (
          <Popover name={item.name} description={item.description} price={item.price} className="popover-content"></Popover>
        )}
        <button className="button" onClick={(index) => {dispatch({ type: 'del', payload: index})}}>Delete {item.name}</button>
        <button className="button" onClick={() => 
        {setIsPopoverVisible(!isPopoverVisible);}}>More info about {item.name}</button>
        </>
      ))}
    </div>
  );
}

export default App;
