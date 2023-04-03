import { useState, useEffect } from "react";
import { getTodos } from "../utils/helper";

interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

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

  return { todos, setTodos, error };
};

export default useTodos;
