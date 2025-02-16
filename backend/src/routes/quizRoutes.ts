import express, { Request, Response } from "express";
import { 
    createQuizController, 
    deleteQuizController, 
    getQuizzesController, 
    getQuizByIdController, 
    updateQuizController 
} from "../controllers/quizController";

const router = express.Router();

// ✅ Ensure all handlers are properly passed
router.post("/", (req: Request, res: Response) => createQuizController(req, res));
router.get("/", (req: Request, res: Response) => getQuizzesController(req, res));
router.get("/:id", (req: Request, res: Response) => getQuizByIdController(req, res));
router.put("/:id", (req: Request, res: Response) => updateQuizController(req, res));
router.delete("/:id", (req: Request, res: Response) => deleteQuizController(req, res));

export default router;
