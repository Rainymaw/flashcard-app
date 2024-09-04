const express = require("express");
const router = express.Router();
const {
  getAllFlashcards,
  getCategoryFlashcard,
  createFlashcard,
  changeFlashcard,
  deleteFlashcard,
} = require("../controllers/flashcardControllers");

router.route("/flashcards").get(getAllFlashcards).post(createFlashcard);
router.route("/flashcard/:id").delete(deleteFlashcard).put(changeFlashcard);
router.route("/flashcards/category/:category").get(getCategoryFlashcard);

module.exports = router;
