import { Request, Response, NextFunction } from "express";
import TodoModel from "../models/todo.model";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body;
    const newTodo = await TodoModel.create({ title, description });
    res.json(newTodo);
  } catch (err) {
    next(err);
  }
};
