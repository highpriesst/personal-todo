import useTodos from "../hooks/useTodos";
import Todo from "./Todo";

function TodoList() {
  const { todos, error } = useTodos();
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Todays work</h1>
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {todos.map(({ title, description, completed }, index) => {
            return (
              <Todo
                index={index}
                key={index}
                title={title}
                description={description}
                completed={completed}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TodoList;
