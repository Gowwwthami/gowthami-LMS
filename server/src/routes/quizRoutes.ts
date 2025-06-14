import express from "express";
import {
  createQuiz,
  getQuizzesByCourse,
  getQuizById,
} from "../controllers/quizController";

const router = express.Router();

// Create a new quiz
router.post("/create", createQuiz);

// Get all quizzes for a specific course
router.get("/course/:courseId", getQuizzesByCourse);

// Get quiz by ID
router.get("/:quizId", getQuizById);

export default router;
