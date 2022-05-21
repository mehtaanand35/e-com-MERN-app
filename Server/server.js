const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

require("dotenv").config({
  path: "./config/indx.env",
});

const connectDB = require("./config/db");
connectDB();

const mensController = require("./controllers/Men.controllers");
const womenController = require("./controllers/Women.controllers");
const electronicController = require("./controllers/Electronic.controller");
const jeweleryController = require("./controllers/Jewelery.controller");
const productsController = require("./controllers/Products.controller");

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/user/", require("./routes/auth.route"));
app.use("/mens", mensController);
app.use("/women", womenController);
app.use("/electronic", electronicController);
app.use("/jewelery", jeweleryController);
app.use("/products", productsController);
app.get("/", (req, res) => {
  res.send("test route => home page");
});

// Page Not founded
app.use((req, res) => {
  res.status(404).json({
    msg: "Page not founded",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
