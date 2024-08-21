const { createBike, getBikes } = require("../services/bike.services");

const addBike = async (req, res) => {
  try {
    const bike = await createBike(req.body);
    res.status(200).json({
      status: "success",
      message: "Bike inserted Successfully",
      data: bike,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Bike is not inserted",
      error: error.message,
    });
  }
};

const showBikes = async (req, res) => {
  try {
    const bikes = await getBikes(); 
    res.status(200).json({
      status: "success",
      data: bikes, 
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing bikes",
      error: error.message,
    });
  }
};

module.exports = { addBike, showBikes };
