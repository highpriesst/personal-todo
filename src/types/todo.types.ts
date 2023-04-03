export interface ITodo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TodoProps {
  todo: ITodo;
}

export type ApiDataType = {
  message: string;
  status: string;
  todos: ITodo[];
};

export interface ITodoProps {
  index: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TodoFormData {
  title: string;
  description: string;
  completed: boolean;
}
