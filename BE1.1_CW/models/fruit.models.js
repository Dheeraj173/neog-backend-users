const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    imgUrl:String,
    fruitName:String,
    fruitInfo:Number,
    calories:Number,
    protein:String,
    carbs:Number,
    liked:Boolean,
    fat:Number
})

const Fruit = mongoose.model("Fruit",fruitSchema);

module.exports = Fruit;