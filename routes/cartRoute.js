const express = require("express");
const {
  addBikeToCart,
  showBikesFromCart,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addBikeToCart);
router.get("/:email", showBikesFromCart);

module.exports = router;
