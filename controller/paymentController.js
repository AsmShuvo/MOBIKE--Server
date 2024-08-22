const cartModel = require("../model/cartModel");
const paymentModel = require("../model/paymentModel");
const {
  getAllPayment,
  getPaymentByEmail,
} = require("../services/payment.services");
const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;

const showPayments = async (req, res) => {
  try {
    console.log("show all payments called");
    const result = await getAllPayment();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get payments",
      error: error.message,
    });
  }
};

const showPaymentsByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const paymentInfo = await getPaymentByEmail(email);
    res.status(200).json(paymentInfo);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get payments of the user",
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

const upadatePaymentStatus = async (req, res) => {
  try {
    const { id, email, confirmation } = req.params;
    console.log("patch called:", id, email, confirmation);

    const filter = { _id: new ObjectId(id), email: email };
    // console.log(filter);
    const updatedPayment = {
      $set: {
        status: confirmation,
      },
    };
    console.log("updated payment: ", updatedPayment);

    const result = await paymentModel.updateOne(filter, updatedPayment);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  showPayments,
  addPayment,
  upadatePaymentStatus,
  showPaymentsByEmail,
};
