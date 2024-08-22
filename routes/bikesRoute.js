const express = require("express");
const router = express.Router();
const {
  addBike,
  showBikes,
  showBikesById,
  deleteBike,
} = require("../controller/bikesController");

router.post("/", addBike);
router.get("/", showBikes);
router.get("/:id", showBikesById);
router.delete("/:id", deleteBike);

module.exports = router;
