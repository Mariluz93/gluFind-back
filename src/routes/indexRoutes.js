// Para centralizar todas las rutas en un solo archivo.
const express = require('express');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;