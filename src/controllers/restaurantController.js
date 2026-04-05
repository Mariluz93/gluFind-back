const Restaurant = require('../models/Restaurant');

const createRestaurant = async (req, res) => {
    try {
        const { name, description, address, image } = req.body;

        if (!name || !description || ! address) {
            return res.status(400).json({ message: "Name, description and address are required" })
        }

        const existingRestaurant = await Restaurant.findOne({ ownerId: req.user._id });

        if (existingRestaurant) {
            return res.status(400).json({ message: "This user already has a restaurant" });
        }

        const newRestaurant = await Restaurant.create({
            name,
            description,
            address,
            image,
            ownerId: req.user._id
        });

        return res.status(201).json({ message: "Restaurant created successfully", restaurant: newRestaurant });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        return res.status(200).json(restaurants);

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};


const getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;

        const restaurant = await Restaurant.findById(id);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        return res.status(200).json(restaurant);

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, address, image } = req.body;

        const restaurant = await Restaurant.findById(id);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        restaurant.name = name || restaurant.name;
        restaurant.description = description || restaurant.description;
        restaurant.address = address || restaurant.address;
        restaurant.image = image || restaurant.image;

        const updatedRestaurant = await restaurant.save();

        return res.status(200).json({ message: "Restaurant updated successfully", restaurant: updatedRestaurant});

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};


const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        
        const restaurant = await Restaurant.findById(id);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (restaurant.ownerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Access denied" });
        }

        await restaurant.deleteOne();

        return res.status(200).json({ message: "Restaurant deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
};