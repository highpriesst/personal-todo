import { getTodos } from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";

import { TodoProps, ITodo } from "./types/todo.types";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  return (
    <div className="App">
      <h2>TODO APP</h2>
      {/* <TodoList /> */}
      <TodoForm />
    </div>
  );
}

export default App;
