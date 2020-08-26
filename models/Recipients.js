const moongoose = require("mongoose");
const { Schema } = moongoose;

const recipientSchema = new Schema({
  email: String,
  response: { type: Boolean, default: false },
});

module.exports = recipientSchema;
