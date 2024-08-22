const express = require("express");
const router = express.Router();
const { addBike, showBikes, showBikesById } = require("../controller/bikesController");

router.post("/", addBike);
router.get("/", showBikes);
router.get("/:id", showBikesById);

module.exports = router;
