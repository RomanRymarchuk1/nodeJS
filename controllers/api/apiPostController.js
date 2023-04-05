const Post = require("../../models/post");

const handleError = (err, res) => {
   res.status(500).send(err);
};

const getPost = (req, res) => {
   Post.findById(req.params.id)
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(err, res));
};

const deletePost = (req, res) => {
   Post.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json(req.params.id))
      .catch((err) => handleError(err, res));
};

const getAllPosts = (req, res) => {
   Post.find()
      .sort({ createdAt: -1 })
      .then((posts) => res.status(200).json(posts))
      .catch((err) => handleError(err, res));
};

const addPost = (req, res) => {
   const { title, author, text } = req.body;
   const post = new Post({ title, author, text });
   post
      .save()
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(err, res));
};

const editPost = (req, res) => {
   const { title, author, text } = req.body;
   const { id } = req.params;
   Post.findByIdAndUpdate(id, { title, author, text }, { new: true })
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(err, res));
};

module.exports = {
   getPost,
   deletePost,
   getAllPosts,
   addPost,
   editPost,
};
