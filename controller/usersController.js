const { createUser, getUser } = require("../services/user.services");

const addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "user is not inserted",
      error: error.message,
    });
  }
};

const showUser = async (req, res) => {
  try {
    console.log("get users called");
    const users = await getUser(req.body);
    console.log("Users:", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing user",
      error: error.message,
    });
  }
};
module.exports = { addUser, showUser };
