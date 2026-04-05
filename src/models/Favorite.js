const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
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

FavoriteSchema.index({ userId: 1, restaurantId: 1 }, { unique: true});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;