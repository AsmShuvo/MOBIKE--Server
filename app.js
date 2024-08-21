const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const { connectDB } = require("./config/db");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
const bikeRoute = require("./routes/bikesRoute");
const blogRoute = require("./routes/blogsRoute");

// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Mobike server");
});

app.use("/bikes", bikeRoute);
app.use("/blogs", blogRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
