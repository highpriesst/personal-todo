import axios, { AxiosResponse } from "axios";
import { ApiDataType } from "../types/todo.types";

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
