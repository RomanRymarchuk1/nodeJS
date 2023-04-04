const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");

const PORT = 5000;

const createPath = (page) => path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (err) => {
   err ? console.log(err) : console.log(`Runing on port ${PORT}`);
});

// app.use((req, res, next) => {
//    console.log(`path: ${req.path}`);
//    console.log(`method: ${req.method}`);
//    next();
// });

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use(express.static("styles")); //Разрешаем доступ браузеру к содежимому данной папки

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

   res.render(createPath("post"), { title });
});

app.get("/posts", (req, res) => {
   const title = "Posts";

   res.render(createPath("posts"), { title });
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
