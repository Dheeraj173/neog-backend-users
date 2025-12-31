const mongoose = require("mongoose");

const productCardSchema = new mongoose.Schema({
    imgUrl: String,
    addTocard: Boolean,
    buyNow: Boolean,
    productName: Object,
    rating:{type:Number, min:0, max:5, default:0},
    ratingCount: Number,
    reviewsCount: Number,
    flipKartAssuredLogo: Boolean,
    actualPrice: Number,
    price: Number,
    discount: Number,
    bankOffer: Object,
    specialOffer, Object,
    warranty: Object,
    wifiConnectivity: Boolean,
    variant: [{type:String}]
}
)

const ProductCard = mongoose.model("ProductCard",productCardSchema);

module.exports = ProductCard;