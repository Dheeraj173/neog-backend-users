const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    type:Number,
    productInfo:Number,
    color:String,
    size:Number,
    addToCard:Boolean,
    price:Number
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;