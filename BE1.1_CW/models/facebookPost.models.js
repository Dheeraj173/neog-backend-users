const mongoose = require("mongoose");

const facebookPostSchema = new mongoose.Schema({
    imgUrl: String,
    name: Boolean,
    createdAt: Date,
    verified: Boolean,
    post: String,
    postImageUrl: String,
    likesCount: Number,
    commentCount: Number,
    sharesCount: Number,
    like: Number,
    comment: String,
    share: Object,
}
)

const FacebookPost = mongoose.model("FacebookPost",facebookPostSchema);

module.exports = FacebookPost;