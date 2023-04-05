const Contact = require("../models/contact");
const createPath = require("../helpers/createPath");
const handleError = require("../helpers/handleError");

const getContacts = (req, res) => {
   const title = "Contacts";
   Contact.find()
      .then((contacts) => res.render(createPath("contacts"), { contacts, title }))
      .catch((err) => handleError(err, res));
};

module.exports = { getContacts };
