import useTodos from "../hooks/useTodos";

function TodoList() {
  const { todos } = useTodos();
  return (
    <div>
      <div>
        <h1>todolist</h1>
      </div>
      <div>
        <ul className="flex gap-5 flex-col p-2">
          {todos.map((item, index) => {
            return (
              <li key={index}>
                <span>Title {item.title}</span>
                <span>Description {item.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
