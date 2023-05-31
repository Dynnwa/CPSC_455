import './App.css';
import React, { useState } from 'react';
import InputForm from './InputForm';
import Card from './Card';
import Popover from './Popover';


function App() {
  const [data, setData] = useState([{
  "name": "fork",
  "price": "3",
  "description": "its a fork",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
  },
  {
  "name": "spoon",
  "price": "4",
  "description": "its a spoon",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDTu-8YF1QJpG5YPfLPGtc7xWuw3AeJWHdckuEEGmnA&s"
}]);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);


const addItem = (item) => {
  setData([...data, item]);
}

  return (
    <div className="App">
      <InputForm addFunction={addItem} />
      {data.map((item, index) => (
        <>
        <Card name={item.name} description={item.description} price={item.price} image={item.image}></Card>
        <button className="button" onClick={() => 
        {const updatedList = [...data];
        updatedList.splice(index, 1);
        setData(updatedList);}}>Delete {item.name}</button>
        <button className="button" onClick={setIsPopoverVisible(true)}>More info about {item.name}</button>
        {isPopoverVisible && (
          <Popover name={item.name} description={item.description} price={item.price}></Popover>
        )}
        </>
      ))}
    </div>
  );
}

export default App;
