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

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  return { todos, setTodos };
};

export default useTodos;
