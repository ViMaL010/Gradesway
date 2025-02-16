import { Request, Response, NextFunction } from "express";

const DEMO_USER = { username: "admin", password: "password123" };

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (username === DEMO_USER.username && password === DEMO_USER.password) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
