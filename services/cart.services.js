const cartModel = require("../model/cartModel");

exports.createCart = async (data) => {
  const result = await cartModel.create(data);
  return result;
};

exports.getCart = async () => {
  const bikes = await cartModel.find();
  return bikes;
};
