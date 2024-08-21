const { createBlog, getBlogs } = require("../services/blog.services");

const addBlog = async (req, res) => {
  try {
    const blog = await createBlog(req.body);
    res.status(200).json({
      status: "success",
      message: "blog inserted Successfully",
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "blog is not inserted",
      error: error.message,
    });
  }
};

const showBlogs = async (req, res) => {
  try {
    const blogs = await getBlogs(req.body);
    res.status(200).json({
      status: "success",
      data: blogs,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing blogs",
      error: error.message,
    });
  }
};
module.exports = { addBlog, showBlogs };
