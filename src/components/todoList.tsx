import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:3000";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/api/todos"
    );
    return todos;
  } catch (error) {
    throw new Error(error); // fix this
  }
};
