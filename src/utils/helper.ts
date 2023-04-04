import axios, { AxiosResponse, AxiosStatic } from "axios";
import { ApiDataType, ITodo } from "../types/todo.types";

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
  formdata: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      title: formdata.title,
      description: formdata.description,
      completed: false,
    };

    const savedTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/api/todos",
      todo
    );

    return savedTodo;
  } catch (error) {
    throw new Error();
  }
};

//Update

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "completed"> = {
      completed: !todo.completed,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/edit/${todo._id}`,
      todoUpdate
    );

    console.log(updatedTodo);

    return updatedTodo;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

//Delete
