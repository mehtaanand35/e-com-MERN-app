const express = require("express");

const Electronic = require("../models/Electronics.model");

const router = express.Router();

//route post
router.post("", async (req, res) => {
  try {
    const electronic = await Electronic.create(req.body);
    return res.status(200).send(electronic);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//route get

router.get("/", async (req, res) => {
  try {
    const electronic = await Electronic.find().lean().exec();
    return res.status(200).send(electronic);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  route get data by id

router.get("/:id", async (req, res) => {
  try {
    const electronic = await Electronic.findById(req.params.id).lean().exec();
    return res.status(200).send(electronic);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
