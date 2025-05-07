const express = require("express");
const cors = require("cors");
const imagesRoute = require("./routes/images");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/images", imagesRoute);

module.exports = app;