import { Request, Response } from "express";
import { createQuiz, getAllQuizzes, getQuizById, updateQuiz, deleteQuiz } from "../models/quizModel";

// Create Quiz
export const createQuizController = async (req: Request, res: Response): Promise<void> => {
    try {
        const quiz = await createQuiz(req.body);
        res.status(201).json(quiz);
    } catch (error:any) {
        res.status(500).json({ error : error.message});
    }
};

// Get all quizzes
export const getQuizzesController = async (_req: Request, res: Response): Promise<void> => {
    try {
        const quizzes = await getAllQuizzes();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quizzes" });
    }
};

// ✅ Fix for `getQuizByIdController`
export const getQuizByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid quiz ID" });
            return;
        }
        const quiz = await getQuizById(id);
        if (!quiz) {
            res.status(404).json({ error: "Quiz not found" });
            return;
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quiz" });
    }
};

// Update quiz
export const updateQuizController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid quiz ID" });
            return;
        }
        const quiz = await updateQuiz(id, req.body);
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: "Failed to update quiz" });
    }
};

// Delete quiz
export const deleteQuizController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "Invalid quiz ID" });
            return;
        }
        await deleteQuiz(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete quiz" });
    }
};
