import mongoose from "mongoose";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<Todo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TodoModel = mongoose.model<Todo>("Todo", TodoSchema);

export default TodoModel;
