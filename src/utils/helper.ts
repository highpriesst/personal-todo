import axios, { AxiosResponse, AxiosStatic } from "axios";
import { ApiDataType, ITodo, ITodoForm } from "../types/todo.types";

const baseUrl: string = "http://localhost:3000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/api/todos"
    );
    console.log(todos.data.todos);

    return todos;
  } catch (error) {
    throw new Error();
  }
};

export const addTodo = async (
  formData: ITodoForm
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      title: formData.title,
      description: formData.description,
      completed: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/api/todos",
      todo
    );
    // console.log(formData);

    return saveTodo;
  } catch (error) {
    console.log(formData);
    throw new Error();
  }
};

//Update

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "completed"> = {
      completed: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw new Error();
  }
};

//Delete
