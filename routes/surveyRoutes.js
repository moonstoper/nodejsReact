const moongoose = require("mongoose");
const requiredLogin = require("../middlewares/requireLogin");
const requiredCredits = require("../middlewares/requireCredits");
const Survey = moongoose.model("surveys");
module.exports = (app) => {
  app.post("/api/surveys", requiredLogin, requiredCredits, (req, res) => {

    const {title,subject,body,recipients} = req.body;
    const survey = new Survey({
        title,
        subject,
        body,
        recipients:recipients.split(',').map(email => ({email: email.trim()})),
        _user : req.user.id,
       dateSent : Date.now()
    });
  });
};
