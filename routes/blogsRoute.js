const express = require("express");
const { addBlog, showBlogs } = require("../controller/blogsController");
const router = express.Router();

router.post("/", addBlog);
router.get("/", showBlogs);

module.exports = router;
