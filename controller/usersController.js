const { createUser } = require("../services/user.services");

const addUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({
      status: "success",
      message: "user inserted Successfully",
      data: user,
    });
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
    const users = await getBlogs(req.body);
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing user",
      error: error.message,
    });
  }
};
module.exports = { addUser, showUser };
