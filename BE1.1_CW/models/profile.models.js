const mongoose = require("mongoose");
      
      const profileSchema = new mongoose.Schema({
          fullName: {type:String, required:true},
          username: {type:String, required:true},
          bio: String,
          profilePicUrl: String,
          followingCount: {type:Number, min:0, default:0},
          followerCount: {type:Number, min:0, default:0},
          companyName: String,
          location: String,
          portfolioUrl: String,
      }
      )
      
      const Profile = mongoose.model("Profile",profileSchema);
      
      module.exports = Profile;