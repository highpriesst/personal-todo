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
      completed: false,
    });

    const newTodo = Todo.create(todo);

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

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(id, body, {
      new: true,
    });

    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo Updated",
      todo: updatedTodo,
      todos: allTodos,
    });
  } catch (error) {
    res.status(500).send("Something went wrong!");
    next(error);
    throw error;
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(
      req.params.id
    );
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};
