const { default: mongoose } = require("mongoose");
const bikeModel = require("../model/bikeModel");

exports.createBike = async (data) => {
  const result = await bikeModel.create(data);
  return result;
};

exports.getBikes = async () => {
  const bikes = await bikeModel.find();
  return bikes;
};

exports.getBikesById = async (id) => {
  const bike = await bikeModel.findById(id);
  return bike;
};

exports.deleteBikeById = async (id) => { 
  const result = await bikeModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  
  if (result.deletedCount === 0) {
    console.log("No document found with the provided id");
  } else {
    console.log("Document deleted successfully");
  }
  
  return result;
};
