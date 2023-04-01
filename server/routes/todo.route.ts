import express, { Router } from "express";
import { getTodos, createTodo } from "../controllers/todo.controller";

const router: Router = express.Router();

router.get("/api/todos", getTodos);

router.post("/api/todos", createTodo);

export default router;
