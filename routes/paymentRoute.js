const express = require("express");
const { showPayments, addPayment } = require("../controller/paymentController");
const router = express.Router();

router.get("/", showPayments);
router.post("/", addPayment);

module.exports = router;
