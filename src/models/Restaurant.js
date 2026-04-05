const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Restaurant name is required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true
        },
        address: {
            type: String,
            required: [true, "Address is required"],
            trim: true
        },
        image: {
            type: String,
            default: ""
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;