import React, { FormEvent, useState } from "react";
import { ITodoForm } from "../types/todo.types";

interface IFormProps {
  handleAddTodo: (e: FormEvent<Element>, formData: ITodoForm) => void;
}

const TodoForm: React.FC<IFormProps> = ({ handleAddTodo }) => {
  const [formData, setFormData] = useState<ITodoForm>({
    title: "",
    description: "",
  });

  function handleFormData(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormData({
      title: "",
      description: "",
    });
  }

  return (
    <form
      className="flex flex-col gap-4 shadow-md p-2 rounded-md"
      onSubmit={(e) => handleAddTodo(e, formData)}>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-lg font-bold mb-2">
          Title
        </label>
        <input
          onChange={handleFormData}
          type="text"
          id="title"
          value={formData.title}
          className="border rounded py-2 px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-lg font-bold mb-2">
          Description
        </label>
        <input
          onChange={handleFormData}
          type="text"
          id="description"
          value={formData.description}
          className="border rounded py-2 px-3"
        />
      </div>
      <button
        type="submit"
        disabled={formData === undefined ? true : false}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
