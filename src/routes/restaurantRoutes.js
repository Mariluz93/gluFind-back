const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMiddleware');
const { roleMiddleware } = require('../middlewares/roleMiddleware');

const {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
} = require('../controllers/restaurantController');

router.post('/', authMiddleware, roleMiddleware("restaurant"), createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.put('/:id', authMiddleware, roleMiddleware("restaurant"), updateRestaurant);
router.delete('/:id', authMiddleware, roleMiddleware("restaurant"), deleteRestaurant);

module.exports = router;