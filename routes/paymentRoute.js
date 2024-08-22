const express = require("express");
const {
  showPayments,
  addPayment,
  upadatePaymentStatus,
  showPaymentsByEmail,
} = require("../controller/paymentController");
const router = express.Router();

router.get("/", showPayments);
router.get("/:email", showPaymentsByEmail);
router.post("/", addPayment);
router.patch("/:id/:email/:confirmation", upadatePaymentStatus);

module.exports = router;
