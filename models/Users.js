const mongoose = require("mongoose");
const { Schema } = mongoose;
//creating schema or format for table
const userSchema = new Schema({
  googleID: String,
  facebookUserID:String,
  credits:{type:Number,default:0}
 // name: String,
});

//creating moongoose collection
mongoose.model("users", userSchema);
