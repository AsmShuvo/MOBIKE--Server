const { getReview, createReview } = require("../services/review.services");

const addReview = async (req, res) => {
  try {
    const review = await createReview(req.body); // Pass req.body directly
    res.status(200).json({
      status: "success",
      message: "Added to review Successfully",
      data: review,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Not added to reviews",
      error: error.message,
    });
  }
};

const showReviews = async (req, res) => {
  try {
    const reviews = await getReview();
    res.status(200).json({
      status: "success",
      data: reviews,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing reviews",
      error: error.message,
    });
  }
};

module.exports = { showReviews, addReview };
