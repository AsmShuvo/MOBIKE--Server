const cartModel = require("../model/cartModel");

exports.createCart = async (data) => {
  const result = await cartModel.create(data);
  return result;
};

exports.getCart = async (email) => {
  const bikes = await cartModel.find({ email: email });
  return bikes;
};
