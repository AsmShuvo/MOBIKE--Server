const { createBike, getBikes } = require("../services/bike.services");

const addBike = async (req, res) => {
  try {
    const bike = await createBike(req.body); // Removed redundant .save()
    res.status(200).json({
      status: "success",
      message: "Bike inserted Successfully",
      data: bike, // Return the inserted bike data
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
    const bikes = await getBikes(); // Added 'await'
    res.status(200).json({
      status: "success",
      data: bikes, // Send the bikes data as response
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
