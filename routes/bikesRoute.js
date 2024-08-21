const express = require("express");
const router = express.Router();
const { addBike, showBikes } = require("../controller/bikesController");

router.post("/", addBike);
router.get("/", showBikes);

module.exports = router;
