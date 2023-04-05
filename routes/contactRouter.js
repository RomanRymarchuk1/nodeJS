const express = require("express");
const { getContacts } = require("../controllers/contactController");

const router = express.Router();

router.get("/contacts", getContacts);

module.exports = router;
