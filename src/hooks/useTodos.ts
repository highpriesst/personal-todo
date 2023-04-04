import { useState, useEffect } from "react";
import { getTodos } from "../utils/helper";
import { ITodo } from "../types/todo.types";
import { updateTodo } from "../utils/helper";

const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => {
        setError("Failed to fetch Todos from Database.");
        console.log(err);
      });
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo, setTodos).catch((err) => console.log(err));

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todoItem) => {
        if (todoItem._id === todo._id) {
          return {
            ...todoItem,
            completed: !todo.completed,
          };
        }
        return todoItem;
      });
      return updatedTodos;
    });
  };

  return { todos, setTodos, error, handleUpdateTodo };
};

export default useTodos;
