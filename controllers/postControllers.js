const Post = require("../models/post");
const createPath = require("../helpers/createPath");
const handleError = require("../helpers/handleError");

const getPost = (req, res) => {
   const title = "Post";
   Post.findById(req.params.id)
      .then((post) => res.render(createPath("post"), { post, title }))
      .catch((err) => handleError(err, res));
};

const deletePost = (req, res) => {
   Post.findByIdAndDelete(req.params.id)
      .then((result) => res.sendStatus(200))
      .catch((err) => handleError(err, res));
};

const getAllPosts = (req, res) => {
   const title = "Posts";
   Post.find()
      .sort({ createdAt: -1 })
      .then((posts) => res.render(createPath("posts"), { posts, title }))
      .catch((err) => handleError(err, res));
};

const addPost = (req, res) => {
   const { title, author, text } = req.body;
   const post = new Post({ title, author, text });
   post
      .save()
      .then((result) => res.redirect("posts"))
      .catch((err) => handleError(err, res));
};

const getAddPost = (req, res) => {
   const title = "Add Title";

   res.render(createPath("add-post"), { title });
};

const getEditPost = (req, res) => {
   const title = "Edit Post";
   Post.findById(req.params.id)
      .then((post) => res.render(createPath("edit-post"), { post, title }))
      .catch((err) => handleError(err, res));
};

const editPost = (req, res) => {
   const { title, author, text } = req.body;
   const { id } = req.params;
   Post.findByIdAndUpdate(id, { title, author, text })
      .then((post) => res.redirect(`/posts/${id}`))
      .catch((err) => handleError(err, res));
};

module.exports = {
   getPost,
   deletePost,
   getAllPosts,
   addPost,
   getAddPost,
   getEditPost,
   editPost,
};
