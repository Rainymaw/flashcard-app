const mongoose = require("mongoose");

const flashSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  modifiedAt: { type: Date },
});
const Flashcard = mongoose.model("flashcard", flashSchema);
module.exports = Flashcard;
