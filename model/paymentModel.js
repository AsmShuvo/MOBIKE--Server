const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    transactionID: {
      type: String,
      required: true,
    },
    cartIds: {
      type: [String],
      required: true,
    },
    bikeModels: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payments", paymentSchema);
