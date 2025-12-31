const mongoose = require("mongoose");

const stayPropertiesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: String,
    pricePerNight: Number,
    capacity: Number,
    isPetFriendly: Boolean,
    hasParking: Boolean,
    hasWiFi: Boolean,
    isActive: Boolean,
},
{timestamps: true}
)

const StayProperties = mongoose.model("StayProperties",stayPropertiesSchema);

module.exports = StayProperties;