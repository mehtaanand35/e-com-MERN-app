const express = require("express");

const Products = require("../models/Products.model");

const router = express.Router();

//route post
router.post("", async (req, res) => {
  try {
    const products = await Products.create(req.body);
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//route get

router.get("/", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  route get data by id

router.get("/:id", async (req, res) => {
  try {
    const products = await Products.findById(req.params.id).lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
