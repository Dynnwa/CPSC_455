import Connection from './db.js';
import express from 'express';
import cors from 'cors';
import route from './routes.js';
import item from './model.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', route);

app.delete('/del/:id', (req, res) => {
  const itemId = req.params.id;
  
  item.findByIdAndDelete(itemId)
      .then(deletedItem => {
        if (deletedItem) {
          console.log('Item deleted:', deletedItem);
        } else {
          console.log('Item not found');
        }
      })
      .catch(error => {
        console.error('Error deleting item:', error);
      })
  return response.status(200);
  });

app.put('/item/:id', (req, res) => {
  const filter = { _id: req.params.id };
  const update = { $set: { price: req.body.price + '0' } };
  const options = { returnOriginal: false };

  item.findOneAndUpdate(filter, update, options)
    .then(result => {
      console.log('Document updated:', result.value);
    })
    .catch(error => {
      console.error('Error updating document:', error);
    })
});

const port = 3006;

Connection();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});