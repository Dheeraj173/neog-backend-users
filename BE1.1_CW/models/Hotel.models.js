const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:[{type:String, required:true, enum: ['Budget', 'Mid-Range', 'Luxury', 'Boutique', 'Resort', 'Other']}],
    location: {type:String, required:true},
    rating:{type:Number, min:0, max:5, default:0},
    reviews: [{type:String}],
    website: String,
    phoneNumber: String,
    checkInTime: {type:String, required:true},
    checkOutTime: {type:String, required:true},
    amenities: [{type: String}],
    priceRange: [{type: String, enum: ['$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other']}],
    reservationsNeeded: Boolean,
    isParkingAvailable: Boolean, 
    isWifiAvailable: Boolean, 
    isPoolAvailable: Boolean,
    isSpaAvailable: Boolean,
    isRestaurantAvailable: Boolean,
    photos: [{type:String}],
},
{timestamps: true}
)

const Hotel = mongoose.model("Hotel",hotelSchema);

module.exports = Hotel;