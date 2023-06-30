const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Define a route handler for the /api endpoint
app.get('/default', (req, res) => {
  res.json([{
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
});

app.delete('/delete/:name', (req, res) => {
    const name = req.params.name;

    // TODO
  
    res.sendStatus(200);
  });

app.post('/save', (req, res) => {
    const { itemId, price } = req.body;
    
    // TODO
    
    res.sendStatus(200);
  });

// Start the server
const port = 3006;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});