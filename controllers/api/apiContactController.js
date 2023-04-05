const Contact = require("../../models/contact");

const getContacts = (req, res) => {
   Contact.find()
      .then((contacts) => res.status(200).json(contacts))
      .catch((err) => res.status(500).send(err));
};

module.exports = { getContacts };
