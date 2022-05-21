const mongoose = require("mongoose");

//----------create men Schema------------
const menSchema = new mongoose.Schema(
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

//-------------create men module------------

module.exports = mongoose.model("men", menSchema);
