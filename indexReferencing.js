//const { model } = require("mongoose");
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Post = require("./BE1.1_CW/models/post.models");
const User = require("./BE1.1_CW/models/user.models");
initializeDatabase();

const newUserData = {
    name: "Dheeraj",
    email: "dhruv@gmail.com",
}

const postData = {
    title: "new post from Dheeraj",
    content: "Hey guys!",
    author: "69574daaf35ef5392a24e9f7",
}

const addUser = async() => {
    try {
        const newUser = new User(newUserData);
        const createdNewUser = await newUser.save();
        console.log("New User created: ", createdNewUser);
    } catch(error) {
        console.log("Error while creating User: ", error);
    }
  }
  //addUser();

  const addPost = async() => {
    try {
        const newPost = new Post(postData);
        const createdNewPost = await newPost.save();
        console.log("New Post created: ", createdNewPost);
    } catch(error) {
        console.log("Error while creating Post: ", error);
    }
  }
  //addPost();

  const getAllPost = async() => {
    try {
        const allPosts = await Post.find().populate("author");
        console.log("All Post Data: ", allPosts);
    } catch (error) {
        console.log("Error while fetching Posts: ", error);
    }
  }
  getAllPost();