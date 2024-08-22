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
    const { email } = req.params;
    const cartItem = await getCart(email);
    console.log("#", cartItem);
    if (cartItem.length==0) {
      return res.status(400).json({
        message: "No Bikes Found On users cart",
      });
    }
    res.status(200).json({
      status: "successfully found cart",
      data: cartItem,
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
