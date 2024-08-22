const express = require("express");
const {
  addBikeToCart,
  showBikesFromCart,
  deleteCartItem,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addBikeToCart);
router.get("/:email", showBikesFromCart);
router.delete("/:id/:email", deleteCartItem);

module.exports = router;
