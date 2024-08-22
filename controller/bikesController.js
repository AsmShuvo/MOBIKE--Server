const {
  createBike,
  getBikes,
  getBikesById,
  deleteBikeById,
} = require("../services/bike.services");

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
const showBikesById = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await getBikesById(id);

    if (!bike) {
      return res.status(404).json({
        status: "fail",
        message: "Bike not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: bike,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing bike",
      error: error.message,
    });
  }
};

const deleteBike = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Bikes id: ", id);
    const result = await deleteBikeById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error deleting bike",
      error: error.message,
    });
  }
};

module.exports = { addBike, showBikes, showBikesById, deleteBike };
