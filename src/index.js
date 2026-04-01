// Archivo principal:

    // dotenv.config()
    // crear app con express
    // middlewares globales
    // rutas
    // conexión a DB
    // app.listen(...)


    //EJEMPLO

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import routes from "./routes/indexRoutes.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", routes);

// connectDB();

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server running");
// });


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