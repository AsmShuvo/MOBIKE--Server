const bikeModel = require("../model/bikeModel");

exports.createBike = async (data) => {
  const result = await bikeModel.create(data);
  return result;
};

exports.getBikes = async () => {
  const bikes = await bikeModel.find();
  return bikes;
};
