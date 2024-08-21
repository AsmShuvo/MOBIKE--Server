const bikeModel = require("../model/bikeModel");

exports.createBike = async (data) => {
  const result = await bikeModel.create(data);
  return result;
};  