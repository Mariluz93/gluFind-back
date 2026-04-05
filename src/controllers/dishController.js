const Dish = require('../models/Dish');
const Restaurant = require('../models/Restaurant');


const createDish = async (req, res) => {
    try {
        const { name, description, price, isGlutenFree, image, restaurantId } = req.body;

        if(!name || !description || !price || !restaurantId) {
            return res.status(400).json({ message: "Name, description, price and restaurantId are required" });
        }

        if (price <=0) {
            return res.status(400).json({ message: "Price must be greater than 0" });
        }

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        const existingDish = await Dish.findOne({
            name,
            restaurantId
        });

        if (existingDish) {
            return res.status(400).json({ message: "This dish already exists in this restaurant" })
        }

        const newDish = await Dish.create({
            name,
            description,
            price,
            isGlutenFree,
            image,
            restaurantId
        });
        
        return res.status(201).json({ message: "Dish created successfully", dish: newDish });

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();

        return res.status(200).json(dishes);

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};


const getDishById = async (req, res) => {
    try {
        const { id } = req.params;

        const dish = await Dish.findById(id);

        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }

        return res.status(200).json(dish);

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

const getDishesByRestaurant = async (req, res) => {
    try {
        const { restaurantId } = req.params;

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        const dishes = await Dish.find({ restaurantId });

        return res.status(200).json(dishes);

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

const updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, isGlutenFree, image } = req.body;

        const dish = await Dish.findById(id);

        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }

        const restaurant = await Restaurant.findById(dish.restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        if (price !== undefined && price <= 0) {
            return res.status(400).json({ message: "Price must be greater than 0" })
        }

        dish.name = name || dish.name;
        dish.description = description || dish.description;
        dish.price = price !== undefined ? price : dish.price;
        dish.isGlutenFree = isGlutenFree !== undefined ? isGlutenFree : dish.isGlutenFree;
        dish.image = image || dish.image;

        const updatedDish = await dish.save();

        return res.status(200).json({ message: "Dish updated successfully", dish: updatedDish });

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

const deleteDish = async (req, res) => {
    try {
        const { id } = req.params;

        const dish = await Dish.findById(id);

        if (!dish) {
            return res.status(404).json({ message: "Dish not found" });
        }

        const restaurant = await Restaurant.findById(dish.restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        await dish.deleteOne();

        return res.status(200).json({ message: "Dish deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

module.exports = {
    createDish,
    getAllDishes,
    getDishById,
    getDishesByRestaurant,
    updateDish,
    deleteDish
};