const mongoose = require("mongoose");

const productCameraSchema = new mongoose.Schema({
    imgUrl:String,
    name:String,
    cameraDescription:String,
    pixels:String,
    sensorType:Number,
    liked:Boolean,
    price:Number,
    actualPrice:Number,
    discount:Number,
    quantityLeft:Number,
    flipKartAssuredImg:Boolean,
    warrantyYears:Number,
    resolutionType:String,
    wifiAvailable:Boolean,
    ratings:Number,
    reviews:Number,
    ratingStars:Number
})

const Camera = mongoose.model("Camera",productCameraSchema);

module.exports = Camera;