import React, { useState } from "react";
import axios from "axios";

interface TodoFormData {
  title: string;
  description: string;
  completed: boolean;
}

const defaultTodoFormData: TodoFormData = {
  title: "",
  description: "",
  completed: false,
};

const TodoForm = () => {
  const [formData, setFormData] = useState<TodoFormData>(defaultTodoFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/todos", formData);
      setFormData(defaultTodoFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col [&>*]:p-3 bg-gray-500">
          <label htmlFor="title">Todo: </label>
          <input
            type="text"
            name="title"
            placeholder="Type here..."
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Type here..."
            value={formData.description}
            onChange={handleChange}
          />

          <div>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={formData.completed}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  completed: event.target.checked,
                })
              }
            />

            <label
              htmlFor="completed"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 float-right">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
