import { Request, Response, NextFunction } from "express";
import Todo from "../models/todo.model";

import { ITodo } from "../types/todo.types";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).send("Something went wrong!");
    next(error);
  }
};

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //Picking specific things from req.body
    const body = req.body as Pick<ITodo, "title" | "description" | "completed">;
    //Creating new Todo from picked information
    const todo: ITodo = new Todo({
      title: body.title,
      description: body.description,
      completed: body.completed,
    });
    //Validate the todo object
    await todo.validate();

    //Saving the new todo
    const newTodo = await todo.save();

    //Getting all todos to show all todos to the user.
    const allTodos: ITodo[] = await Todo.find();

    res.status(201).json({
      message: "New todo added to the list!",
      todo: newTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).send("Something went wrong!");
    next(error);
    throw error;
  }
};
