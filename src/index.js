require('dotenv').config();


const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const { connectDB } = require('./config/db.js');
const indexRoutes = require('./routes/indexRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Backend funcionando');
});

app.use('/api', indexRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});