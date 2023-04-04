import express, { Router } from "express";
import { getTodos, addTodo, updateTodo } from "../controllers/todo.controller";

const router: Router = express.Router();

router.get("/api/todos", getTodos);

router.post("/api/todos", addTodo);

router.put("/edit/:id", updateTodo);

export default router;
