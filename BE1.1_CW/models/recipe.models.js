const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {type: String, required:true},
    author: {type: String, required: true},
    difficulty: {type:String, enum:['Easy', 'Intermediate', 'Difficult']},
    prepTime: Number,
    cookTime: Number,
    ingredients: [{type:String}],
    instructions: [{type: String}],
    imageUrl: String,
}, {
    timestamps: true
}
)

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;