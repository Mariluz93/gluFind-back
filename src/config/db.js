// Conexión a la base de datos.

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database successfully connected')
    } catch (error) {
        console.error('Database connection error', error.message);
        throw new Error('Error while starting the database');
    }
};

module.exports = { connectDB };