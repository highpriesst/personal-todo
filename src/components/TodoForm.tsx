import React, { SyntheticEvent, useState } from "react";
import axios from "axios";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const TodoForm = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [completed, setCompleted] = useState<boolean>();

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    //axios sent action
    axios
      .post("http://localhost:3000/api/todos", {
        title,
        description,
        completed,
      })
      .then(() => {
        setTitle("");
        setDescription("");
        setCompleted(false);
      })
      .catch((err) => {
        console.log(err);
      });

    //Works
    // console.log(title);
    // console.log(description);
    // console.log(completed);
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Todo: </label>
          <input
            type="text"
            placeholder="Type here..."
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="title">Description</label>
          <input
            type="text"
            placeholder="Type here..."
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="checkbox">Completed</label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
          />

          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
