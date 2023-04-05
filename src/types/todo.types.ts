export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITodoForm {
  title: string;
  description: string;
  completed?: boolean;
}

export interface TodoProps {
  todo: ITodo;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
