const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    role: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
