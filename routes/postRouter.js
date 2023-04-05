const express = require("express");
const {
   getPost,
   deletePost,
   getAllPosts,
   addPost,
   getAddPost,
   getEditPost,
   editPost,
} = require("../controllers/postControllers");

const router = express.Router();

router.get("/posts/:id", getPost);
router.delete("/posts/:id", deletePost);
router.get("/posts", getAllPosts);
router.post("/add-post", addPost);
router.get("/add-post", getAddPost);
router.get("/edit/:id", getEditPost);
router.put("/edit/:id", editPost);

module.exports = router;
