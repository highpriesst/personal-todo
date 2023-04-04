import useTodos from "../hooks/useTodos";
import { updateTodo } from "../utils/helper";
import Todo from "./Todo";

function TodoList() {
  const { todos, error, handleUpdateTodo } = useTodos();

  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Todays work</h1>
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                index={index}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TodoList;
