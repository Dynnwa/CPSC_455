import item from './model.js';

export const getAll = async (request, response) => {
    try {
        console.log('getAll');
        const items = await item.find({})

        return response.status(200).json(items);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const addItem = async (request, response) => {
    console.log('addItem');
    try {
        const newItem = await item.create({
            name: request.body.name,
            price: request.body.price,
            description: request.body.description,
            image: request.body.image,
            manufacturer: "Me",
        })

        await newItem.save();

        return response.status(200).json(newItem);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateItem = (id, data) => async (dispatch) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const item = await item.findById(request.params.id);

        return response.status(200).json(item);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}