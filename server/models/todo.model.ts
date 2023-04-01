import { model, Schema } from "mongoose";
import { ITodo } from "../types/todo.types";

const TodoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = model<ITodo>("Todo", TodoSchema);

export default Todo;
