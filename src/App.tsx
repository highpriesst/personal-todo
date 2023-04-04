import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App flex items-center justify-center flex-col">
      <h1 className="font-bold text-3xl pb-10">Todo App</h1>
      <div className="flex gap-10 justify-evenly">
        <div>
          <TodoForm />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
