const moongoose = require("mongoose");
const { Schema } = moongoose;
const RecipientsSchema = require("./Recipients");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientsSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastrespond: Date,
});

moongoose.model("surveys", surveySchema);
