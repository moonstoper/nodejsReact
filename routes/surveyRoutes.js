const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const moongoose = require("mongoose");
const requiredLogin = require("../middlewares/requireLogin");
const requiredCredits = require("../middlewares/requireCredits");

const Survey = moongoose.model("surveys");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = (app) => {
  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting");
  });

  app.get("/api/surveys", requiredLogin, async (req, res) => {
    const survey = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.send(survey);
  });
  app.post("/api/surveys/webhooks", async (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    await _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match)
          return { email, surveyId: match.surveyId, choice: match.choice };
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastrespond: new Date(),
          }
        ).exec();
      })
      .value();
    res.send({});
  });

  app.post("/api/surveys", requiredLogin, requiredCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: new Date(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
