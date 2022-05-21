const mongoose = require("mongoose");

//----------create jewelery Schema------------
const jewelerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//-------------create jewelery module------------

module.exports = mongoose.model("jewelery", jewelerySchema);
