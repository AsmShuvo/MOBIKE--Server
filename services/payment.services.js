const paymentModel = require("../model/paymentModel");

exports.getAllPayment = async () => {
  const paymentsInfo = await paymentModel.find();
  return paymentsInfo;
};

exports.getPaymentByEmail = async (email) => {
  const paymentInfo = await paymentModel.find({ email: email });
  return paymentInfo;
};
