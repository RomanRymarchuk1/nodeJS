const express = require("express");
const { getContacts } = require("../../controllers/api/apiContactController");

const router = express.Router();

//Get Contacts
router.get("/api/contacts", getContacts);

module.exports = router;
