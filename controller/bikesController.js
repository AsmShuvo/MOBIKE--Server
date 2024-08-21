const bikeModel = require("../model/bikeModel");
const { createBike } = require("../services/bike.services");

const addBike = async (req, res) => {
  try {
    const bike = await createBike(req.body);
    const result = await bike.save();
    res.status(200).json({
      status: "success",
      message: "Bike inserted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Bike is not inserted",
      error: error.message,
    });
  }
};

module.exports = { addBike };
