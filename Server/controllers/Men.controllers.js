const express = require("express");

const Men = require("../models/Men.model");

const router = express.Router();

//route post
router.post("", async (req, res) => {
  try {
    const men = await Men.create(req.body);
    return res.status(200).send(men);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//route get

router.get("/", async (req, res) => {
  try {
    const men = await Men.find().lean().exec();
    return res.status(200).send(men);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//  route get data by id

router.get("/:id", async (req, res) => {
  try {
    const men = await Men.findById(req.params.id).lean().exec();
    return res.status(200).send(men);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
