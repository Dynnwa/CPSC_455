import mongoose from 'mongoose';

const uri = "mongodb+srv://ddanielwei:IIIIIIII@cluster0.fxxy7qn.mongodb.net/?retryWrites=true&w=majority";

const Connection = () => {
    mongoose.connect(uri, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error);
    })
}

export default Connection;