const express = require('express');
const route = express.Router();


//import controllers
const { dummy ,clickLike,disLike } = require("../controller/likeController");
const { createComment } = require("../controller/commentController")
const { createPost ,getAllPosts }  = require("../controller/postController");


//define api routes

route.post("/posts/create",createPost);
route.post("/comment/create",createComment);
route.get("/posts",getAllPosts );
route.post("/likes/like",clickLike);
route.post("/likes/dislike",disLike);

module.exports = route;