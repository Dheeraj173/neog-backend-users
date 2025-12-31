const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    imgUrl: String,
    servings: Number,
    preperringTime: Number,
    cookingTime: Number,
    ingredients: [{type:String}],
    directions: [{type: String}],
    notes: String,
}
)

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;