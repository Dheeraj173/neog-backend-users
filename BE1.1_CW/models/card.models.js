const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    cardNumber:Number,
    name:String,
    goodThru:String,
    cardType:String,
    cardAllotedByBank:String
})

const Card = mongoose.model("Card",cardSchema);

module.exports = Card;