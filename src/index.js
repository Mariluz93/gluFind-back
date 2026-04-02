require('dotenv').config();


const express = require('express');
const morgan = require('morgan'); //para mostrar en consola las peticiones que llegan al servidor
const { connectDB } = require('./config/db.js');
const indexRoutes = require('./routes/indexRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); 

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

app.use('/api', indexRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});