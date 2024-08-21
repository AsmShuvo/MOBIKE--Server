const express = require("express");
const { addUser, showUser } = require("../controller/usersController");
const router = express.Router();

router.post("/", addUser);
router.get("/", showUser);

module.exports = router;
