const createPath = require("./createPath");

const handleError = (err, res) => {
   console.log(err);
   res.render(createPath("error"), { title: "error" });
};

module.exports = handleError;
