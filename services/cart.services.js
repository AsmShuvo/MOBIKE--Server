const cartModel = require("../model/cartModel");
const { ObjectId } = require("mongoose").Types;

exports.createCart = async (data) => {
  const result = await cartModel.create(data);
  return result;
};

exports.getCart = async (email) => {
  const bikes = await cartModel.find({ email: email });
  return bikes;
};


exports.deleteItemFromCartByIdEmail = async (id, email) => { 
    console.log("ID: ", id);
    console.log("Email: ", email);
  
    // Ensure ObjectId is valid
    if (!ObjectId.isValid(id)) {
      console.log("Invalid ObjectId");
      return null;
    }
  
    const result = await cartModel.deleteOne({
      email: email,
      _id: new ObjectId(id),
    });
  
    if (result.deletedCount === 0) {
      console.log("No document found with the provided id and email");
    } else {
      console.log("Document deleted successfully");
    }
  
    return result;
  };
