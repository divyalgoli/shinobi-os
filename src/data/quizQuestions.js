// src/data/quizQuestions.js - Master Chunin Exam Question Database (530 Questions)
import charactersQuestions from "./quiz/charactersQuestions.js";
import villagesAndClansQuestions from "./quiz/villagesAndClansQuestions.js";
import jutsuAndChakraQuestions from "./quiz/jutsuAndChakraQuestions.js";
import kekkeiGenkaiQuestions from "./quiz/kekkeiGenkaiQuestions.js";
import tailedBeastsQuestions from "./quiz/tailedBeastsQuestions.js";
import historyAndKageQuestions from "./quiz/historyAndKageQuestions.js";
import storyArcsQuestions from "./quiz/storyArcsQuestions.js";
import loreAndCultureQuestions from "./quiz/loreAndCultureQuestions.js";

const allQuestionsRaw = [
  ...charactersQuestions,
  ...villagesAndClansQuestions,
  ...jutsuAndChakraQuestions,
  ...kekkeiGenkaiQuestions,
  ...tailedBeastsQuestions,
  ...historyAndKageQuestions,
  ...storyArcsQuestions,
  ...loreAndCultureQuestions
];

// Deduplicate by ID and sort ascending
const questionMap = new Map();
allQuestionsRaw.forEach((item) => {
  if (!questionMap.has(item.id)) {
    questionMap.set(item.id, item);
  }
});

const quizQuestions = Array.from(questionMap.values()).sort((a, b) => a.id - b.id);

export default quizQuestions;
