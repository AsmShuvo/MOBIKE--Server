const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    user_designation: {
      type: String,
      required: true,
    },
    user_review: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
