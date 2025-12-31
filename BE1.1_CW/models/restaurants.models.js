const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    cuisine:[{type:String, required:true, enum: ['American', 'Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Thai', 'French', 'Mediterranean', 'Greek', 'Spanish', 'Other']}],
    location: {type:String, required:true},
    rating:{type:Number, min:0, max:5, default:0},
    reviews: [{type:String}],
    phoneNumber: String,
    website: String,
    openingHours: String,
    priceRange: {type: String, enum: ['$ (0-10)', '$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other']},
    reservationsNeeded:Boolean,
    isDeliveryAvailable: Boolean, 
    menuUrl: {type:String, required: true}, 
    photos: [{type:String}],
},
{timestamps: true}
)

const Restaurants = mongoose.model("Restaurants",restaurantsSchema);

module.exports = Restaurants;