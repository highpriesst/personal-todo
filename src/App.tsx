import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App flex items-center justify-center flex-col">
      <h2>TODO APP</h2>
      <div className="flex gap-10">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
