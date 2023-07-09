import express, { Router } from 'express';
import { getAll, addItem, updateItem } from './controller.js';

const route = express.Router();

route.get('/default', getAll);
//route.delete('/del', deleteItem);
route.post('/save', addItem)
//route.put('/item/:id', updateItem);

export default route;
