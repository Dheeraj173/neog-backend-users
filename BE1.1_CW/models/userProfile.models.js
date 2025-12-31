const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    firstName: String,
    lastName: String,
    birthDate: Date,
    isActive: Boolean,
    isAdmin: Boolean,
    profilePictureUrl: String,
},
{timestamps: true}
)

const UserProfile = mongoose.model("UserProfile",userProfileSchema);

module.exports = UserProfile;