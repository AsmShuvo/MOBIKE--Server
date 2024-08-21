const express = require("express");
const router = express.Router();
const { addBike } = require("../controller/bikesController");

router.post("/", addBike);

module.exports = router;
