const express = require("express");
const mongoose = require("mongoose");
const cookie = require("cookie-session");
const passport = require("passport");
//const bodyParser=require("body-parser");
const keys = require("./config/keys");
require("./models/Users");
require("./services/passport");
require("./models/Survey");
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const app = express();
app.use(express.json());
app.use(
  cookie({
    maxAge: 30 * 24 ** 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
if (process.env.NODE_ENV === "production") {
  //express will serve up producton
  //like main.js or main.css
  app.use(express.static("client/build"));

  //Express will serve the index.html
  //if will not recoginize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
