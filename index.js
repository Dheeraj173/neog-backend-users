const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const fs = require("fs");
//const Movie = require("./BE1.1_CW/models/movie.models");
const Profile = require("./BE1.1_CW/models/profile.models");
initializeDatabase();

const jsonData = fs.readFileSync("profile.json", "utf-8");
//const moviesData = JSON.parse(jsonData);
const profilesData = JSON.parse(jsonData);

function seedData () {
    try {
        for(const profileData of profilesData) {
            const newProfile = new Profile({
                fullName:profileData.fullName,
                username: profileData.username,
                bio: profileData.bio,
                profilePicUrl:profileData.profilePicUrl,
                followingCount: profileData.followingCount,
                followerCount: profileData.followerCount,
                companyName: profileData.companyName,
                location: profileData.location,
                portfolioUrl: profileData.portfolioUrl,
            });
            console.log(newProfile.fullName);
            newProfile.save();
        }
    } catch(error) {
        console.log("Error seeding the data", error);
    }
}

seedData();

// function seedData () {
//     try {

//         for(const profileData of profilesData) {
//             const newProfile = new Profile({
//                 fullName:profileData.fullName,
//                 username: profileData.username,
//                 bio: profileData.bio,
//                 profilePicUrl:profileData.profilePicUrl,
//                 followingCount: profileData.followingCount,
//                 followerCount: profileData.followerCount,
//                 companyName: profileData.companyName,
//                 location: profileData.location,
//                 portfolioUrl: profileData.portfolioUrl,
//             });
//             console.log(newProfile.fullName);
//             newProfile.save();
//         }
//     } catch(error) {
//         console.log("Error seeding the data", error);
//     }
// }
