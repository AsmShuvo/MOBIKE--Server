const cartModel = require("../model/cartModel");
const paymentModel = require("../model/paymentModel");
const getAllPayments = require("../services/payment.services");
const mongoose = require("mongoose");

const showPayments = async (req, res) => {
  try {
    const result = await getAllPayments();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get payments",
      error: error.message,
    });
  }
};

const addPayment = async (req, res) => {
  try {
    const payment = req.body;
    const paymentResult = await paymentModel.create(payment);
    const query = {
      _id: {
        $in: payment.cartIds.map((id) => new mongoose.Types.ObjectId(id)),
      },
    };
    const deleteResult = await cartModel.deleteMany(query);
    res.status(200).json({ paymentResult, deleteResult });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error proceeding payment",
      error: error.message,
    });
  }
};

module.exports = { showPayments, addPayment };
