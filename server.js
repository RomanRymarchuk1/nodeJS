const express = require("express");
const path = require("path");
const app = express();

const PORT = 5000;

const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, (err) => {
   err ? console.log(err) : console.log(`Runing on port ${PORT}`);
});

app.get("/", (req, res) => {
   //    res.send("Hello World"); //Прочитаеться как текст
   //    res.send("<h1>Hello World</h1>"); //Прочитаеться как HTML
   res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
   res.sendFile(createPath("contacts"));
});

app.get("/about-us", (req, res) => {
   res.redirect("/contacts");
});

app.use((req, res) => {
   res.status(404).sendFile(createPath("error"));
});

/*
Порядок вызова методов ВАЖЕН 
В случаи если use (27-29) будет вызван раньше то 
все последующие обработчики будут безсмысленны 
поскольку все будет обрабатывать use
*/
