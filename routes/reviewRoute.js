const express = require("express");
const { addReview, showReviews } = require("../controller/reviewController");

const router = express.Router();

router.get("/", showReviews);
router.post("/", addReview);

module.exports = router;
