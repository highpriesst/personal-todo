import React, { useState } from "react";

type AddTodoFormProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddTodo(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
