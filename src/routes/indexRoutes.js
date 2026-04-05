const express = require('express');
const authRoutes = require('./authRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const dishRoutes = require('./dishRoutes');
const favoriteRoutes = require('./favoriteRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/dishes', dishRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;