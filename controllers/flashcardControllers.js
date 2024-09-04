const Flashcard = require("../model/Flashcard");
const getAllFlashcards = async (req, res) => {
  const flashcards = await Flashcard.find();
  res
    .status(200)
    .json({ message: "flaschards fetched", flashcards: flashcards });
};
const getCategoryFlashcard = async (req, res) => {
  const { category } = req.params;
  const flashcards = await Flashcard.find({ category: category });
  res
    .status(200)
    .json({ message: `category ${category}`, flashcards: flashcards });
};
const createFlashcard = async (req, res) => {
  const { question, answer, category } = req.body;
  const created = await Flashcard.create({
    question: question,
    answer: answer,
    category: category,
  });
  res.status(201).json({ message: "flashcard created", created: created });
};
const changeFlashcard = async (req, res) => {
  const { id } = req.params;
  const { question, answer, category } = req.body;
  const moddified = await Flashcard.findByIdAndUpdate(id, {
    question: question,
    answer: answer,
    category: category,
    modifiedAt: new Date(),
  });
  res.status(200).json({ message: "Flashcard succesfully modified" });
};
const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  const deleted = await Flashcard.findByIdAndDelete(id);
  res.status(200).json({ message: "flashcard deleted" });
};

module.exports = {
  getAllFlashcards,
  getCategoryFlashcard,
  createFlashcard,
  changeFlashcard,
  deleteFlashcard,
};
