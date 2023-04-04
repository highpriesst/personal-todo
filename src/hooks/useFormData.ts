import { useState } from "react";
import { TodoFormData } from "../types/todo.types";
import axios from "axios";

const defaultTodoFormData: TodoFormData = {
  title: "",
  description: "",
  completed: false,
};

const useTodoForm = () => {
  const [formData, setFormData] = useState<TodoFormData>(defaultTodoFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(defaultTodoFormData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/todos", formData);
      console.log(formData);
      setFormData(defaultTodoFormData);
      // alert("Added");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    formData,
    handleChange,
    resetForm,
    handleSubmit,
  };
};

export default useTodoForm;

//Saving it just in case.
// const [formData, setFormData] = useState<TodoFormData>(defaultTodoFormData);

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();

//   try {
//     // await axios.post("http://localhost:3000/api/todos", formData);
//     console.log(formData);

//     setFormData(defaultTodoFormData);
//     // alert("Added");
//   } catch (error) {
//     console.error(error);
//   }
// };

//Old onChange for the completed checkbox.
// onChange={(event) =>
//   setFormData({
//     ...formData,
//     completed: event.target.checked,
//   })
// }
