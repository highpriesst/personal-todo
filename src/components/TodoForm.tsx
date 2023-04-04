import useTodoForm from "../hooks/useFormData";
import axios from "axios";
import { TodoFormData } from "../types/todo.types";
import { useState } from "react";

const defaultTodoFormData: TodoFormData = {
  title: "",
  description: "",
  completed: false,
};

const TodoForm = () => {
  const { formData, handleChange, handleSubmit } = useTodoForm();

  return (
    <div className="border p-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col [&>*]:p-1">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900">
            Todo
          </label>

          <input
            type="text"
            name="title"
            id="description"
            placeholder="Type here..."
            value={formData.title}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900">
            Description
          </label>

          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <div>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
            <label
              htmlFor="completed"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 float-right">
              Completed
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
