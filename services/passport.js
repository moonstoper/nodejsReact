const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
//making cookie from id
passport.serializeUser((user, done) => {
  done(null, user.id);
});
//with cookie creating user model instance
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true, //making proxy true for google auth
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        //already documented
        return done(null, existingUser);
      }
      const user = await new User({ googleID: profile.id }).save();//saving the profile
      done(null, user);
    }
  )
);


passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookID,
      clientSecret: keys.facebookSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true, //making proxy true for facebook auth
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookUserID: profile.id });//saving the profile

      if (existingUser) {
        //already documented
        return done(null, existingUser);
      }
      const user = await new User({ facebookUserID: profile.id }).save();
      done(null, user);
    }
  )
);

