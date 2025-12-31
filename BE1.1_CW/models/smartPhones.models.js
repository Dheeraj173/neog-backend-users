const mongoose = require("mongoose");

const smartPhonesSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    model:{type:String, enum: ['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan', 'Other']},
    releaseYear: {type:Number, required:true},
    operatingSystem: {type:String},
    displaySize: String,
    storage: String,
    ram, String,
    cameraSpec: Object,
    batteryCapacity: {type:String},
    connectivity: [{type:String}],
    price: Number,
    colorsAvailable: [{type:String}],
    features: [{type:String}],
},
{timestamps: true}
)

const SmartPhones = mongoose.model("SmartPhones",smartPhonesSchema);

module.exports = SmartPhones;