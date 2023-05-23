const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const isLoggedIn = require("../middlewares/requireLogin");

router.post("/stripe", isLoggedIn, async (req, res) => {
  const { id } = req.body;
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "5$ for 5 credits",
    source: id,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.send(req.user);
});

module.exports = router;
