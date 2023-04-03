import useTodos from "../hooks/useTodos";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div>
      <div>
        <h1>Todays work</h1>
      </div>
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
    </div>
  );
}

export default TodoList;
