import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    }
})

const item = mongoose.model('item', itemSchema);

export default item;