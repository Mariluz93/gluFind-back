const Favorite = require('../models/Favorite');
const Restaurant = require('../models/Restaurant');

const addFavorite = async (req, res) => {
    try {
        const { restaurantId } = req.body;

        if (!restaurantId) {
            return res.status(400).json({ message: "restaurantId is required" });
        }

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        const existingFavorite = await Favorite.findOne({
            userId: req.user._id,
            restaurantId
        });

        if (existingFavorite) {
            return res.status(400).json({ message: "Restaurant already in favorites" });
        }

        const newFavorite = await Favorite.create({
            userId: req.user._id,
            restaurantId
        });

        return res.status(201).json({ message: "Favorite added successfully", favorite: newFavorite });

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.user._id }).populate("restaurantId"); //populate devuelve toda la info, no solo el id del restaurante

        return res.status(200).json(favorites);

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

const removeFavorite = async (req, res) => {
    try {
        const { restaurantId } = req.params;

        const favorite = await Favorite.findOne({
            userId: req.user._id,
            restaurantId
        });

        if (!favorite) {
            return res.status(404).json({ message: "Favorite not found" });
        }

        await favorite.deleteOne();

        return res.status(200).json({ message: "Favorite removed successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error" })
    }
};

module.exports = {
    addFavorite,
    getFavorites,
    removeFavorite
};