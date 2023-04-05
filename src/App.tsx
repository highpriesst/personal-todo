import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { ITodo, ITodoForm } from "./types/todo.types";
import { useState, useEffect } from "react";

import { getTodos, addTodo, updateTodo } from "./utils/helper";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState<string>("");

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => {
        setError(err.message);
        console.log(err);
      });
  };

  const handleAddTodo = async (
    e: React.FormEvent,
    formData: ITodoForm
  ): Promise<void> => {
    e.preventDefault();
    try {
      const { status, data } = await addTodo(formData);
      if (status !== 201) {
        throw new Error("Error! Todo not saved");
      }
      setTodos(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, [setTodos]);
  return (
    <div className="App flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl pb-10">Todo App</h1>
      <div className="flex gap-10 justify-evenly">
        <div>
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
        {error ? (
          <div>Something went Wrong!</div>
        ) : (
          <div>
            {todos.map((todo: ITodo) => (
              <Todo
                key={todo._id}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
