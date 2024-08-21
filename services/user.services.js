const userModel = require("../model/userModel");

exports.createUser = async (data) => {
  const result = await userModel.create(data);
  return result;
};

exports.getUser = async () => {
  const users = await userModel.find();
  return users;
};
