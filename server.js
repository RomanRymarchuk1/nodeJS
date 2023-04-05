const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

app.set("view engine", "ejs");

const PORT = 5000;
const db = "mongodb+srv://RomanRymarchuk:roman123@cluster0.yzne2th.mongodb.net/?retryWrites=true&w=majority";

mongoose
   .connect(db)
   .then((res) => console.log("Connected to DB "))
   .catch((error) => console.log(error));

const createPath = (page) => path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (err) => {
   err ? console.log(err) : console.log(`Runing on port ${PORT}`);
});

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.get("/", (req, res) => {
   const title = "Home";
   res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
   const title = "Contacts";

   const contacts = [
      { name: "YouTube", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "GitHub", link: "#" },
   ];
   res.render(createPath("contacts"), { contacts, title });
});

app.get("/posts/:id", (req, res) => {
   const title = "Post";
   const post = {
      id: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.",
      title: "Post title",
      date: "04.04.2023",
      author: "Roman",
   };
   res.render(createPath("post"), { title, post });
});

app.get("/posts", (req, res) => {
   const title = "Posts";
   const posts = [
      {
         id: "1",
         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.",
         title: "Post title",
         date: "04.04.2023",
         author: "Roman",
      },
   ];

   res.render(createPath("posts"), { title, posts });
});

app.post("/add-post", (req, res) => {
   const { title, author, text } = req.body;
   const post = new Post({ title, author, text });
   post
      .save()
      .then((result) => res.send(result))
      .catch((err) => {
         console.log(err);
         res.render(createPath("error"), { title: "error" });
      });
});
app.get("/add-post", (req, res) => {
   const title = "Add Title";

   res.render(createPath("add-post"), { title });
});

app.get("/about-us", (req, res) => {
   res.redirect("/contacts");
});

app.use((req, res) => {
   const title = "Error";

   res.status(404).render(createPath("error"), { title });
});

/*
Порядок вызова методов ВАЖЕН 
*/
