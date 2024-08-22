const {
  createCart,
  getCart,
  deleteItemFromCartByIdEmail,
} = require("../services/cart.services");

const addBikeToCart = async (req, res) => {
  try {
    console.log("adding bike: ", req.body);
    const bike = await createCart(req.body);
    res.status(200).json(bike);
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
    if (cartItem.length == 0) {
      return res.status(400).json({
        message: "No Bikes Found On users cart",
      });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing cart",
      error: error.message,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.params;
    console.log("id: ", id);
    console.log("email: ", email);
    const result = await deleteItemFromCartByIdEmail(id, email);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error deleting item",
      error: error.message,
    });
  }
};

module.exports = { addBikeToCart, showBikesFromCart, deleteCartItem };
