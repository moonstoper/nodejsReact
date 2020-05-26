const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin=require("../middlewares/requireLogin");
module.exports = (app) => {
    //avoid unauthorized access using requireLogin
    //not calling requirelogin() instantly because we want respone from api/stripe
  app.post("/api/stripe/v1",requireLogin, async (req, res) => {
        
    console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5$ bill",
      source: req.body.id,
    });
    req.user.credits+=5;
    const user=await req.user.save();

    res.send(user);
  });
  app.post("/api/stripe/v2",requireLogin, async (req, res) => {
        
    console.log(req.body);
    const charge = await stripe.charges.create({
      amount: 1000,
      currency: "usd",
      description: "10$ bill",
      source: req.body.id,
    });
    req.user.credits+=10;
    const user=await req.user.save();

    res.send(user);
  });
};
