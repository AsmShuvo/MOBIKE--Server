const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    owner_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    love: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      required: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
