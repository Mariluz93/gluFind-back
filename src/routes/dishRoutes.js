const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMiddleware');
const { roleMiddleware } = require('../middlewares/roleMiddleware');

const {
    createDish,
    getAllDishes,
    getDishById,
    getDishesByRestaurant,
    updateDish,
    deleteDish
} =  require('../controllers/dishController');

router.post('/', authMiddleware, roleMiddleware("restaurant"), createDish);
router.get('/', getAllDishes);
router.get('/restaurant/:restaurantId', getDishesByRestaurant);
router.get('/:id', getDishById);
router.put('/:id', authMiddleware, roleMiddleware("restaurant"), updateDish);
router.delete('/:id', authMiddleware, roleMiddleware("restaurant"), deleteDish);

module.exports = router;