const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy=require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
//making cookie from id
passport.serializeUser((user,done)=>{
  done(null,user.id);
});
//with cookie creating user model instance
passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>{
    done(null,user);
  })
}
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy:true //making proxy true for google auth
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then((existingUser) => {
        if (existingUser) {
          //already documented
          done(null,existingUser);
        } else {
          new User({ googleID: profile.id }).save().then(user=>done(null,user));
        }
      });
    }
  )
);