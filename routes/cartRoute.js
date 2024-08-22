const express = require("express");
const {
  addBikeToCart,
  showBikesFromCart,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addBikeToCart);
router.get("/", showBikesFromCart);

module.exports = router;
