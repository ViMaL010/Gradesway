import { Request, Response } from "express";// Ensure this exists
import { authenticateUser } from "../services/authService";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await authenticateUser(email, password);

        if (!user) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
