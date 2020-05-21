const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  googleID: String,
  facebookUserID:String,
 // name: String,
});
mongoose.model("users", userSchema);
