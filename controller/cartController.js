const { createCart, getCart } = require("../services/cart.services");

const addBikeToCart = async (req, res) => {
  try {
    const bike = await createCart(req.body);
    res.status(200).json({
      status: "success",
      message: "Added to cart Successfully",
      data: bike,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Not added to cart",
      error: error.message,
    });
  }
};

const showBikesFromCart = async (req, res) => {
  try {
    const bikes = await getCart();
    res.status(200).json({
      status: "success",
      data: bikes,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing cart",
      error: error.message,
    });
  }
};

module.exports = { addBikeToCart, showBikesFromCart };
