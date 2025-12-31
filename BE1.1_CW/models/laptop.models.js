const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    processor, String,
    ramSizeGB: Number,
    storageSizeGB: Number,
    screenSizeInches: Number,
    isTouchscreen: Boolean,
    hasSSD: Boolean,
    isSaleActive: Boolean,
    isActive: Boolean,
},{
    timestamps: true
})

const Laptops = mongoose.model("Laptops",laptopSchema);

module.exports = Laptops;
