const express = require("express");
const createPaymentIntent = require("../controller/paymentIntentController");
const router = express.Router();

router.post("/", createPaymentIntent);

module.exports = router;
