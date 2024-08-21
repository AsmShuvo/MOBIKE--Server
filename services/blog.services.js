const blogModel = require("../model/blogModel");


exports.createBlog = async (data) => {
  const result = await blogModel.create(data);
  return result;
};

exports.getBlogs = async () => {
  const blogs = await blogModel.find();
  return blogs;
};


