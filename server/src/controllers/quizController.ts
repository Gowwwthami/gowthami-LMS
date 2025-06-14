import { Request, Response } from "express";
import Quiz from "../models/Quiz";

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, courseId, questions } = req.body;
    const newQuiz = new Quiz({ title, courseId, questions });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to create quiz", error });
  }
};

// Get all quizzes for a course
export const getQuizzesByCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const quizzes = await Quiz.find({ courseId });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch quizzes", error });
  }
};

// Get a quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
  try {
    const { quizId } = req.params;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch quiz", error });
  }
};
