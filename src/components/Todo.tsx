import React from "react";
import { TodoProps, ITodo } from "../types/todo.types";

type Props = TodoProps & {
  handleUpdateTodo: (todo: ITodo) => void;
  handleDeleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}) => {
  const checkTodo: string = todo.completed ? `line-through` : "";
  const buttonColor: string = todo.completed ? `bg-gray-300` : `bg-green-500`;

  return (
    <div className="flex justify-between items-center bg-white rounded-md shadow-md p-4 mb-4">
      <div className="flex-grow">
        <h1 className={`${checkTodo} text-xl font-semibold mb-2`}>
          {todo.title}
        </h1>
        <span className={`${checkTodo} text-gray-600`}>{todo.description}</span>
      </div>
      <div className="flex">
        <button
          onClick={() => handleUpdateTodo(todo)}
          className={`${buttonColor} text-white rounded-md px-4 py-2 ml-2`}>
          Done
        </button>
        <button
          className="text-white rounded-md px-4 py-2 bg-red-500 ml-2"
          onClick={() => handleDeleteTodo(todo._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
