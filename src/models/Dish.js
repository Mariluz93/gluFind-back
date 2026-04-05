//modelo de plato

const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Dish name is required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0.01, "Price must be greater than 0"]
        },
        isGlutenFree: {
            type: Boolean,
            required: true,
            default: false
        },
        image: {
            type: String,
            default: "",
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Dish = mongoose.model("Dish", DishSchema);

module.exports = Dish;