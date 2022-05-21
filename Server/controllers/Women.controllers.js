const express = require("express");

const Women = require("../models/Women.model");

const router = express.Router();

//route post
router.post("", async (req, res) => {
  try {
    const women = await Women.create(req.body);
    return res.status(200).send(women);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//route get

router.get("/", async (req, res) => {
  try {
    const women = await Women.find().lean().exec();
    return res.status(200).send(women);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  route get data by id

router.get("/:id", async (req, res) => {
  try {
    const women = await Women.findById(req.params.id).lean().exec();
    return res.status(200).send(women);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
