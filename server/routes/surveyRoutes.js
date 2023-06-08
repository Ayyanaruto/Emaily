const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const express = require("express");
const mongoose = require("mongoose");
const requireCredits = require("../middlewares/requireCredits");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");
const Surveys = mongoose.model("survey");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplate");
const { mail } = require("sendgrid");

router.get("/surveys", requireLogin, async (req, res) => {
  const surveys = await Surveys.find({ _user: req.user.id }).select({
    recipients: false,
  });
  res.send(surveys);
});
router.post("/surveys", requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Surveys({
    title,
    subject,
    body,
    recipients: recipients.split(",").map((email) => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now(),
  });

  router.post("/surveys/webhook", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);

        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Surveys.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();
  });

  const mailer = new Mailer(survey, surveyTemplate(survey));
  try {
    await mailer.send();
    await survey.save();
    console.log(survey);
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
});

module.exports = router;
