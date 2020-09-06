const moongoose = require("mongoose");
const { Schema } = moongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});

module.exports = recipientSchema;
