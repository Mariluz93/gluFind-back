const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMiddleware');
const { roleMiddleware } = require('../middlewares/roleMiddleware');

const {
    addFavorite,
    getFavorites,
    removeFavorite
} = require('../controllers/favoriteController');


router.post('/', authMiddleware, roleMiddleware("user"), addFavorite);
router.get('/', authMiddleware, roleMiddleware("user"), getFavorites);
router.delete('/:restaurantId', authMiddleware, roleMiddleware("user"), removeFavorite);

module.exports = router;