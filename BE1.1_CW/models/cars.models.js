const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: Number,
    mileage: Number,
    fuelType, String,
    transmission: String,
    bodyStyle: String,
    color: String,
    isCertifiedPreOwned: Boolean,
    isFourWheelDrive: Boolean,
    isLuxury: Boolean,
    isActive: Boolean,
},{
    timestamps: true
})

const Cars = mongoose.model("Cars",carsSchema);

module.exports = Cars;
