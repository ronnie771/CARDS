const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { Userx } = require("../models/userx");
const { Card } = require("../models/card");
const auth = require("../middleware/auth");
const router = express.Router();

const getCards = async (cardsArray) => {
  const cards = await Card.find({ bizNumber: { $in: cardsArray } });
  return cards;
};

router.get("/cards", async (req, res) => {
  let data = {};
  data.cards = req.query.numbers.split(",");

  const cards = await getCards(data.cards);
  res.send(cards);
});

router.post("/", async (req, res) => {
  let user = await Userx.findOne({ email: req.body.email });

  user = new Userx(
    _.pick(req.body, ["name", "email", "password", "biz", "cards"])
  );

  await user.save();
  res.send(_.pick(user, ["_id", "name", "email"]));
});
module.exports = router;
