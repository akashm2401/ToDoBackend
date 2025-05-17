import { Router } from "express";
import { createTodo, getTodos, deletTodo, updateTodo } from "../controllers/todo.controller.js";

export const todoRoutes = Router();

todoRoutes.get("/", getTodos);

todoRoutes.post("/", createTodo);

todoRoutes.post("/delete", deletTodo);

todoRoutes.post("/update", updateTodo);

