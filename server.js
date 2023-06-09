const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const apiPostRoutes = require("./routes/api/apiPostRotes");
const apiContactRoutes = require("./routes/api/apiContactRouter");

const postRouter = require("./routes/postRouter");
const contactRouter = require("./routes/contactRouter");
const createPath = require("./helpers/createPath");

const app = express();

// const errMsg = chalk.bgKeyword("white").redBright;
// const successMsg = chalk.bgKeyword("green").white;

app.set("view engine", "ejs");

mongoose
   .connect(process.env.MONGO_URL)
   .then((res) => console.log("Connected to DB "))
   .catch((error) => console.log(error));

app.listen(process.env.PORT, (err) => {
   err ? console.log(err) : console.log(`Runing on port ${process.env.PORT}`);
});

app.use(express.urlencoded({ extended: false }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.static("styles"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
   const title = "Home";
   res.render(createPath("index"), { title });
});

app.use(postRouter);
app.use(contactRouter);
app.use(apiPostRoutes);
app.use(apiContactRoutes);

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
