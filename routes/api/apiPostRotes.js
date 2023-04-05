const express = require("express");
const { getPost, deletePost, getAllPosts, addPost, editPost } = require("../../controllers/api/apiPostController");

const router = express.Router();

//Get All Posts
router.get("/api/posts", getAllPosts);

//Add New Post
router.post("/api/add-post", addPost);

//Update Post By Id
router.put("/api/edit/:id", editPost);

//Get Post By Id
router.get("/api/post/:id", getPost);

//Delete Post By Id
router.delete("/api/post/:id", deletePost);

module.exports = router;
